import getDbPool from '@/config/database';
import { CMSPage, CMSUser } from '@/types/cms.types';
import bcrypt from 'bcryptjs';

/**
 * MySQL Stored Procedure Adapter for CMS
 * Encapsulates all data access and business logic via MySQL Stored Procedures (amp_nts)
 */

export async function getMysqlPages(): Promise<CMSPage[] | null> {
  const pool = getDbPool();
  if (!pool) return null;

  try {
    const [results] = await pool.query<any>('CALL sp_cms_get_all_pages()');
    const rows = (results && results[0]) || [];

    return rows.map((r: any) => ({
      id: r.page_id,
      title: r.title,
      slug: r.slug,
      status: r.status,
      metaTitle: r.meta_title || '',
      metaDescription: r.meta_description || '',
      updatedAt: r.updated_at ? new Date(r.updated_at).toISOString() : new Date().toISOString(),
      createdAt: r.created_at ? new Date(r.created_at).toISOString() : new Date().toISOString(),
      blocks: [],
    }));
  } catch (err) {
    console.warn('MySQL sp_cms_get_all_pages failed, using local fallback:', (err as Error).message);
    return null;
  }
}

export async function getMysqlPageById(pageId: string): Promise<CMSPage | null> {
  const pool = getDbPool();
  if (!pool) return null;

  try {
    const [results] = await pool.query<any>('CALL sp_cms_get_page_by_id(?)', [pageId]);
    const pages = (results && results[0]) || [];

    if (!pages || pages.length === 0) return null;
    const page = pages[0];
    const blocks = (results && results[1]) || [];

    return {
      id: page.page_id,
      title: page.title,
      slug: page.slug,
      status: page.status,
      metaTitle: page.meta_title || '',
      metaDescription: page.meta_description || '',
      updatedAt: page.updated_at ? new Date(page.updated_at).toISOString() : new Date().toISOString(),
      createdAt: page.created_at ? new Date(page.created_at).toISOString() : new Date().toISOString(),
      blocks: blocks.map((b: any) => ({
        id: b.id,
        type: b.block_type,
        content: typeof b.content_json === 'string' ? JSON.parse(b.content_json) : b.content_json,
        isVisible: Boolean(b.is_visible),
        sortOrder: b.sort_order,
      })),
    };
  } catch (err) {
    console.warn('MySQL sp_cms_get_page_by_id failed, using local fallback:', (err as Error).message);
    return null;
  }
}

export async function getMysqlPageBySlug(slug: string): Promise<CMSPage | null> {
  const pool = getDbPool();
  if (!pool) return null;

  try {
    const cleanSlug = slug.replace(/^\/+/, '');
    const [results] = await pool.query<any>('CALL sp_cms_get_page_by_slug(?)', [cleanSlug]);
    const pages = (results && results[0]) || [];

    if (!pages || pages.length === 0) return null;
    const page = pages[0];
    const blocks = (results && results[1]) || [];

    return {
      id: page.page_id,
      title: page.title,
      slug: page.slug,
      status: page.status,
      metaTitle: page.meta_title || '',
      metaDescription: page.meta_description || '',
      updatedAt: page.updated_at ? new Date(page.updated_at).toISOString() : new Date().toISOString(),
      createdAt: page.created_at ? new Date(page.created_at).toISOString() : new Date().toISOString(),
      blocks: blocks.map((b: any) => ({
        id: b.id,
        type: b.block_type,
        content: typeof b.content_json === 'string' ? JSON.parse(b.content_json) : b.content_json,
        isVisible: Boolean(b.is_visible),
        sortOrder: b.sort_order,
      })),
    };
  } catch (err) {
    console.warn('MySQL sp_cms_get_page_by_slug failed, using local fallback:', (err as Error).message);
    return null;
  }
}

export async function saveMysqlPage(pageData: Partial<CMSPage> & { title: string; slug: string }): Promise<CMSPage | null> {
  const pool = getDbPool();
  if (!pool) return null;

  try {
    const pageId = pageData.id || `pg-${Date.now()}`;
    const title = pageData.title.trim();
    const slug = pageData.slug.trim().replace(/^\/+/, '');
    const status = pageData.status === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT';
    const metaTitle = pageData.metaTitle || title;
    const metaDescription = pageData.metaDescription || '';

    // Delegate page upsert & uniqueness business logic to stored procedure
    await pool.query('CALL sp_cms_upsert_page(?, ?, ?, ?, ?, ?)', [
      pageId,
      title,
      slug,
      status,
      metaTitle,
      metaDescription,
    ]);

    // Synchronize blocks via stored procedures
    if (Array.isArray(pageData.blocks)) {
      await pool.query('CALL sp_cms_delete_page_blocks(?)', [pageId]);

      for (let i = 0; i < pageData.blocks.length; i++) {
        const b = pageData.blocks[i];
        const blockId = b.id || `blk-${Date.now()}-${i}`;
        const blockType = b.type || 'Text';
        const contentJson = JSON.stringify(b.content || (b as any).data || {});
        const isVisible = b.isVisible !== false ? 1 : 0;
        const sortOrder = typeof b.sortOrder === 'number' ? b.sortOrder : i;

        await pool.query('CALL sp_cms_save_page_block(?, ?, ?, ?, ?, ?)', [
          blockId,
          pageId,
          blockType,
          sortOrder,
          contentJson,
          isVisible,
        ]);
      }
    }

    return {
      id: pageId,
      title,
      slug,
      status,
      metaTitle,
      metaDescription,
      blocks: pageData.blocks || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  } catch (err) {
    const errorMsg = (err as Error).message || '';
    if (errorMsg.toLowerCase().includes('slug is already in use')) {
      throw new Error('Slug is already in use by another page');
    }
    console.warn('MySQL saveMysqlPage failed, falling back:', errorMsg);
    return null;
  }
}

export async function deleteMysqlPage(pageId: string): Promise<boolean | null> {
  const pool = getDbPool();
  if (!pool) return null;

  try {
    const [results] = await pool.query<any>('CALL sp_cms_delete_page(?)', [pageId]);
    const affected = results?.[0]?.[0]?.affected_rows || 0;
    return affected > 0;
  } catch (err) {
    console.warn('MySQL deleteMysqlPage failed, falling back:', (err as Error).message);
    return null;
  }
}

// ==========================================
// USERS & AUTH
// ==========================================

export async function getMysqlUsers(): Promise<CMSUser[] | null> {
  const pool = getDbPool();
  if (!pool) return null;

  try {
    const [results] = await pool.query<any>('CALL sp_cms_get_all_users()');
    const rows = (results && results[0]) || [];

    return rows.map((u: any) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      status: u.status,
      lastLogin: u.last_login,
    }));
  } catch (err) {
    console.warn('MySQL getMysqlUsers failed, falling back:', (err as Error).message);
    return null;
  }
}

export async function saveMysqlUser(user: { id?: string; name: string; email: string; role?: 'Admin' | 'Editor'; password?: string }): Promise<CMSUser | null> {
  const pool = getDbPool();
  if (!pool) return null;

  try {
    const userId = user.id || `usr-${Date.now()}`;
    const cleanEmail = user.email.trim().toLowerCase();
    const cleanName = user.name.trim();
    const role = user.role === 'Admin' ? 'Admin' : 'Editor';
    const hasPassword = Boolean(user.password);
    const hashedPassword = user.password ? await bcrypt.hash(user.password.trim(), 10) : '';

    await pool.query('CALL sp_cms_upsert_user(?, ?, ?, ?, ?, ?)', [
      userId,
      cleanName,
      cleanEmail,
      role,
      hashedPassword,
      hasPassword ? 1 : 0,
    ]);

    return {
      id: userId,
      name: cleanName,
      email: cleanEmail,
      role,
      status: 'Active',
      lastLogin: 'Never',
    };
  } catch (err) {
    console.warn('MySQL saveMysqlUser failed, falling back:', (err as Error).message);
    return null;
  }
}

export async function deleteMysqlUser(userId: string): Promise<boolean | null> {
  const pool = getDbPool();
  if (!pool) return null;

  try {
    const [results] = await pool.query<any>('CALL sp_cms_delete_user(?)', [userId]);
    const affected = results?.[0]?.[0]?.affected_rows || 0;
    return affected > 0;
  } catch (err) {
    console.warn('MySQL deleteMysqlUser failed, falling back:', (err as Error).message);
    return null;
  }
}

export async function verifyMysqlCredentials(email: string, password: string): Promise<CMSUser | null> {
  const pool = getDbPool();
  if (!pool) return null;

  try {
    const [results] = await pool.query<any>('CALL sp_cms_get_user_by_email(?)', [email.trim().toLowerCase()]);
    const users = (results && results[0]) || [];

    if (!users || users.length === 0) return null;
    const user = users[0];

    // Check password with bcrypt
    let isMatch = false;
    if (user.password.startsWith('$2a$') || user.password.startsWith('$2b$')) {
      isMatch = await bcrypt.compare(password, user.password);
    } else {
      // Legacy plain-text match: upgrade automatically to bcrypt hash
      isMatch = user.password === password;
      if (isMatch) {
        const newHash = await bcrypt.hash(password, 10);
        await pool.query('CALL sp_cms_update_user_password(?, ?)', [user.id, newHash]);
      }
    }

    if (!isMatch) return null;

    const nowStr = new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' });
    await pool.query('CALL sp_cms_update_user_login(?, ?)', [user.id, nowStr]);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      lastLogin: nowStr,
    };
  } catch (err) {
    console.warn('MySQL verifyMysqlCredentials failed, falling back:', (err as Error).message);
    return null;
  }
}

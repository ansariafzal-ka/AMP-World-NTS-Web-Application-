import getDbPool from '@/config/database';
import { CMSPage, CMSUser } from '@/types/cms.types';
import type { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import bcrypt from 'bcryptjs';

/**
 * MySQL Adapter for CMS
 * Reads and writes directly to MySQL Workbench schema (amp_nts)
 */

export async function getMysqlPages(): Promise<CMSPage[] | null> {
  const pool = getDbPool();
  if (!pool) return null;

  try {
    const query = `
      SELECT 
        p.id,
        p.page_id,
        p.title,
        p.slug,
        p.status,
        p.meta_title,
        p.meta_description,
        p.created_at,
        p.updated_at,
        COUNT(b.id) AS block_count
      FROM cms_pages p
      LEFT JOIN cms_page_blocks b ON p.page_id = b.page_id
      GROUP BY p.id, p.page_id, p.title, p.slug, p.status, p.meta_title, p.meta_description, p.created_at, p.updated_at
      ORDER BY p.updated_at DESC
    `;
    const [rows] = await pool.query<RowDataPacket[]>(query);
    return rows.map((r) => ({
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
    console.warn('MySQL getMysqlPages failed, using local fallback:', (err as Error).message);
    return null;
  }
}

export async function getMysqlPageById(pageId: string): Promise<CMSPage | null> {
  const pool = getDbPool();
  if (!pool) return null;

  try {
    const [pages] = await pool.query<RowDataPacket[]>(
      `SELECT * FROM cms_pages WHERE page_id = ? OR id = ? LIMIT 1`,
      [pageId, isNaN(Number(pageId)) ? -1 : parseInt(pageId, 10)]
    );

    if (pages.length === 0) return null;
    const page = pages[0];

    const [blocks] = await pool.query<RowDataPacket[]>(
      `SELECT * FROM cms_page_blocks WHERE page_id = ? ORDER BY sort_order ASC`,
      [page.page_id]
    );

    return {
      id: page.page_id,
      title: page.title,
      slug: page.slug,
      status: page.status,
      metaTitle: page.meta_title || '',
      metaDescription: page.meta_description || '',
      updatedAt: page.updated_at ? new Date(page.updated_at).toISOString() : new Date().toISOString(),
      createdAt: page.created_at ? new Date(page.created_at).toISOString() : new Date().toISOString(),
      blocks: blocks.map((b) => ({
        id: b.id,
        type: b.block_type,
        content: typeof b.content_json === 'string' ? JSON.parse(b.content_json) : b.content_json,
        isVisible: Boolean(b.is_visible),
        sortOrder: b.sort_order,
      })),
    };
  } catch (err) {
    console.warn('MySQL getMysqlPageById failed, using local fallback:', (err as Error).message);
    return null;
  }
}

export async function getMysqlPageBySlug(slug: string): Promise<CMSPage | null> {
  const pool = getDbPool();
  if (!pool) return null;

  try {
    const cleanSlug = slug.replace(/^\/+/, '');
    const [pages] = await pool.query<RowDataPacket[]>(
      `SELECT * FROM cms_pages WHERE slug = ? AND status = 'PUBLISHED' LIMIT 1`,
      [cleanSlug]
    );

    if (pages.length === 0) return null;
    const page = pages[0];

    const [blocks] = await pool.query<RowDataPacket[]>(
      `SELECT * FROM cms_page_blocks WHERE page_id = ? AND is_visible = 1 ORDER BY sort_order ASC`,
      [page.page_id]
    );

    return {
      id: page.page_id,
      title: page.title,
      slug: page.slug,
      status: page.status,
      metaTitle: page.meta_title || '',
      metaDescription: page.meta_description || '',
      updatedAt: page.updated_at ? new Date(page.updated_at).toISOString() : new Date().toISOString(),
      createdAt: page.created_at ? new Date(page.created_at).toISOString() : new Date().toISOString(),
      blocks: blocks.map((b) => ({
        id: b.id,
        type: b.block_type,
        content: typeof b.content_json === 'string' ? JSON.parse(b.content_json) : b.content_json,
        isVisible: Boolean(b.is_visible),
        sortOrder: b.sort_order,
      })),
    };
  } catch (err) {
    console.warn('MySQL getMysqlPageBySlug failed, using local fallback:', (err as Error).message);
    return null;
  }
}

export async function saveMysqlPage(pageData: Partial<CMSPage> & { title: string; slug: string }): Promise<CMSPage | null> {
  const pool = getDbPool();
  if (!pool) return null;

  const connection = await pool.getConnection();
  await connection.beginTransaction();

  try {
    const pageId = pageData.id || `pg-${Date.now()}`;
    const title = pageData.title.trim();
    const slug = pageData.slug.trim().replace(/^\/+/, '');
    const status = pageData.status === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT';
    const metaTitle = pageData.metaTitle || title;
    const metaDescription = pageData.metaDescription || '';

    await connection.query(
      `INSERT INTO cms_pages (page_id, title, slug, status, meta_title, meta_description, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, NOW())
       ON DUPLICATE KEY UPDATE
         title = VALUES(title),
         slug = VALUES(slug),
         status = VALUES(status),
         meta_title = VALUES(meta_title),
         meta_description = VALUES(meta_description),
         updated_at = NOW()`,
      [pageId, title, slug, status, metaTitle, metaDescription]
    );

    if (Array.isArray(pageData.blocks)) {
      await connection.query(`DELETE FROM cms_page_blocks WHERE page_id = ?`, [pageId]);

      for (let i = 0; i < pageData.blocks.length; i++) {
        const b = pageData.blocks[i];
        const blockId = b.id || `blk-${Date.now()}-${i}`;
        const blockType = b.type || 'Text';
        const contentJson = JSON.stringify(b.content || (b as any).data || {});
        const isVisible = b.isVisible !== false ? 1 : 0;
        const sortOrder = typeof b.sortOrder === 'number' ? b.sortOrder : i;

        await connection.query(
          `INSERT INTO cms_page_blocks (id, page_id, block_type, sort_order, content_json, is_visible)
           VALUES (?, ?, ?, ?, ?, ?)`,
          [blockId, pageId, blockType, sortOrder, contentJson, isVisible]
        );
      }
    }

    await connection.commit();

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
    await connection.rollback();
    console.warn('MySQL saveMysqlPage failed, falling back:', (err as Error).message);
    return null;
  } finally {
    connection.release();
  }
}

export async function deleteMysqlPage(pageId: string): Promise<boolean | null> {
  const pool = getDbPool();
  if (!pool) return null;

  try {
    const [result] = await pool.query<ResultSetHeader>(
      `DELETE FROM cms_pages WHERE page_id = ? OR slug = ?`,
      [pageId, pageId]
    );
    return result.affectedRows > 0;
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
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT id, name, email, role, status, last_login, created_at, updated_at FROM cms_users ORDER BY created_at ASC`
    );
    return rows.map((u) => ({
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

    if (user.password) {
      const hashedPassword = await bcrypt.hash(user.password.trim(), 10);
      await pool.query(
        `INSERT INTO cms_users (id, name, email, role, status, password, last_login)
         VALUES (?, ?, ?, ?, 'Active', ?, 'Never')
         ON DUPLICATE KEY UPDATE
           name = VALUES(name),
           role = VALUES(role),
           password = VALUES(password)`,
        [userId, cleanName, cleanEmail, role, hashedPassword]
      );
    } else {
      await pool.query(
        `INSERT INTO cms_users (id, name, email, role, status, password, last_login)
         VALUES (?, ?, ?, ?, 'Active', 'password123', 'Never')
         ON DUPLICATE KEY UPDATE
           name = VALUES(name),
           role = VALUES(role)`,
        [userId, cleanName, cleanEmail, role]
      );
    }

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
    const [result] = await pool.query<ResultSetHeader>(
      `DELETE FROM cms_users WHERE id = ? OR email = ?`,
      [userId, userId]
    );
    return result.affectedRows > 0;
  } catch (err) {
    console.warn('MySQL deleteMysqlUser failed, falling back:', (err as Error).message);
    return null;
  }
}

export async function verifyMysqlCredentials(email: string, password: string): Promise<CMSUser | null> {
  const pool = getDbPool();
  if (!pool) return null;

  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT * FROM cms_users WHERE email = ? LIMIT 1`,
      [email.trim().toLowerCase()]
    );

    if (rows.length === 0) return null;
    const user = rows[0];

    // Check password with bcrypt
    let isMatch = false;
    if (user.password.startsWith('$2a$') || user.password.startsWith('$2b$')) {
      isMatch = await bcrypt.compare(password, user.password);
    } else {
      // Legacy plain-text match: upgrade automatically to bcrypt hash
      isMatch = user.password === password;
      if (isMatch) {
        const newHash = await bcrypt.hash(password, 10);
        await pool.query(`UPDATE cms_users SET password = ? WHERE id = ?`, [newHash, user.id]);
      }
    }

    if (!isMatch) return null;

    const nowStr = new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' });
    await pool.query(`UPDATE cms_users SET last_login = ? WHERE id = ?`, [nowStr, user.id]);

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

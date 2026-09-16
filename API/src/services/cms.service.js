const pool = require('../config/database');
const { ApiError } = require('../utils/ApiError');
const bcrypt = require('bcryptjs');

/**
 * CMS Service
 * Interacts with MySQL exclusively via pre-compiled Stored Procedures (amp_nts)
 */
class CmsService {
  // ==========================================
  // PAGES & BLOCKS
  // ==========================================

  async getAllPages() {
    const [results] = await pool.query('CALL sp_cms_get_all_pages()');
    const rows = (results && results[0]) || [];

    return rows.map((r) => ({
      id: r.page_id,
      title: r.title,
      slug: r.slug,
      status: r.status,
      metaTitle: r.meta_title || '',
      metaDescription: r.meta_description || '',
      updatedAt: r.updated_at,
      createdAt: r.created_at,
      blockCount: Number(r.block_count) || 0,
    }));
  }

  async getPageById(pageId) {
    const [results] = await pool.query('CALL sp_cms_get_page_by_id(?)', [pageId]);
    const pages = (results && results[0]) || [];

    if (!pages || pages.length === 0) {
      throw new ApiError(404, `Page not found for id "${pageId}"`);
    }

    const page = pages[0];
    const blocks = (results && results[1]) || [];

    return {
      id: page.page_id,
      title: page.title,
      slug: page.slug,
      status: page.status,
      metaTitle: page.meta_title || '',
      metaDescription: page.meta_description || '',
      updatedAt: page.updated_at,
      createdAt: page.created_at,
      blocks: blocks.map((b) => ({
        id: b.id,
        type: b.block_type,
        data: typeof b.content_json === 'string' ? JSON.parse(b.content_json) : b.content_json,
        isVisible: Boolean(b.is_visible),
        sortOrder: b.sort_order,
      })),
    };
  }

  async getPageBySlug(slug) {
    const cleanSlug = slug.replace(/^\/+/, '');
    const [results] = await pool.query('CALL sp_cms_get_page_by_slug(?)', [cleanSlug]);
    const pages = (results && results[0]) || [];

    if (!pages || pages.length === 0) {
      throw new ApiError(404, `Page not found for slug "${cleanSlug}"`);
    }

    const page = pages[0];
    const blocks = (results && results[1]) || [];

    return {
      id: page.page_id,
      title: page.title,
      slug: page.slug,
      status: page.status,
      metaTitle: page.meta_title || '',
      metaDescription: page.meta_description || '',
      updatedAt: page.updated_at,
      createdAt: page.created_at,
      blocks: blocks.map((b) => ({
        id: b.id,
        type: b.block_type,
        data: typeof b.content_json === 'string' ? JSON.parse(b.content_json) : b.content_json,
        isVisible: Boolean(b.is_visible),
        sortOrder: b.sort_order,
      })),
    };
  }

  async savePage(pageData) {
    const pageId = pageData.id || `pg-${Date.now()}`;
    const title = pageData.title.trim();
    const slug = (pageData.slug || title.replace(/[^a-zA-Z0-9-_]+/g, '-').replace(/(^-|-$)/g, ''))
      .replace(/^\/+/, '');
    const status = pageData.status === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT';
    const metaTitle = pageData.metaTitle || title;
    const metaDescription = pageData.metaDescription || '';

    // Delegate page upsert & uniqueness validation to stored procedure
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
        const contentJson = JSON.stringify(b.data || {});
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
    };
  }

  async deletePage(pageId) {
    const [results] = await pool.query('CALL sp_cms_delete_page(?)', [pageId]);
    const affected = results?.[0]?.[0]?.affected_rows || 0;
    return affected > 0;
  }

  // ==========================================
  // USERS & AUTH
  // ==========================================

  async getAllUsers() {
    const [results] = await pool.query('CALL sp_cms_get_all_users()');
    const rows = (results && results[0]) || [];

    return rows.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      status: u.status,
      lastLogin: u.last_login,
      createdAt: u.created_at,
    }));
  }

  async getUserByEmail(email) {
    const [results] = await pool.query('CALL sp_cms_get_user_by_email(?)', [email.trim().toLowerCase()]);
    const users = (results && results[0]) || [];
    return users[0] || null;
  }

  async saveUser({ id, name, email, role, password }) {
    const userId = id || `usr-${Date.now()}`;
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();
    const userRole = role === 'Admin' ? 'Admin' : 'Editor';
    const hasPassword = Boolean(password);
    const hashedPassword = password ? await bcrypt.hash(password.trim(), 10) : '';

    await pool.query('CALL sp_cms_upsert_user(?, ?, ?, ?, ?, ?)', [
      userId,
      cleanName,
      cleanEmail,
      userRole,
      hashedPassword,
      hasPassword ? 1 : 0,
    ]);

    return {
      id: userId,
      name: cleanName,
      email: cleanEmail,
      role: userRole,
      status: 'Active',
      lastLogin: 'Never',
    };
  }

  async deleteUser(userId) {
    const [results] = await pool.query('CALL sp_cms_delete_user(?)', [userId]);
    const affected = results?.[0]?.[0]?.affected_rows || 0;
    return affected > 0;
  }

  async verifyCredentials(email, password) {
    const user = await this.getUserByEmail(email);
    if (!user) return null;

    let isMatch = false;
    if (user.password.startsWith('$2a$') || user.password.startsWith('$2b$')) {
      isMatch = await bcrypt.compare(password, user.password);
    } else {
      isMatch = user.password === password;
      if (isMatch) {
        const newHash = await bcrypt.hash(password, 10);
        await pool.query('CALL sp_cms_update_user_password(?, ?)', [user.id, newHash]);
      }
    }

    if (!isMatch) return null;

    // Update last login via procedure
    const nowStr = new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' });
    await pool.query('CALL sp_cms_update_user_login(?, ?)', [user.id, nowStr]);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }
}

module.exports = new CmsService();

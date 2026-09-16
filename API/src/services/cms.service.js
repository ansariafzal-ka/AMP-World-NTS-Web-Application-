const pool = require('../config/database');
const { ApiError } = require('../utils/ApiError');
const bcrypt = require('bcryptjs');

/**
 * CMS Service
 * Interacts directly with MySQL database tables: cms_pages, cms_page_blocks, cms_users
 */
class CmsService {
  // ==========================================
  // PAGES & BLOCKS
  // ==========================================

  async getAllPages() {
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
    const [rows] = await pool.query(query);
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
    const [pages] = await pool.query(
      `SELECT * FROM cms_pages WHERE page_id = ? OR id = ? LIMIT 1`,
      [pageId, isNaN(pageId) ? -1 : parseInt(pageId, 10)]
    );

    if (pages.length === 0) {
      throw new ApiError(404, `Page not found for id "${pageId}"`);
    }

    const page = pages[0];
    const [blocks] = await pool.query(
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
    ``
  }

  async getPageBySlug(slug) {
    const cleanSlug = slug.replace(/^\/+/, '');
    const [pages] = await pool.query(
      `SELECT * FROM cms_pages WHERE LOWER(slug) = LOWER(?) LIMIT 1`,
      [cleanSlug]
    );

    if (pages.length === 0) {
      throw new ApiError(404, `Page not found for slug "${cleanSlug}"`);
    }

    const page = pages[0];
    const [blocks] = await pool.query(
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
    const connection = await pool.getConnection();
    await connection.beginTransaction();

    try {
      const pageId = pageData.id || `pg-${Date.now()}`;
      const title = pageData.title.trim();
      const slug = (pageData.slug || title.replace(/[^a-zA-Z0-9-_]+/g, '-').replace(/(^-|-$)/g, ''))
        .replace(/^\/+/, '');
      const status = pageData.status === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT';
      const metaTitle = pageData.metaTitle || title;
      const metaDescription = pageData.metaDescription || '';

      // Upsert into cms_pages
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

      // Synchronize blocks if provided
      if (Array.isArray(pageData.blocks)) {
        await connection.query(`DELETE FROM cms_page_blocks WHERE page_id = ?`, [pageId]);

        for (let i = 0; i < pageData.blocks.length; i++) {
          const b = pageData.blocks[i];
          const blockId = b.id || `blk-${Date.now()}-${i}`;
          const blockType = b.type || 'Text';
          const contentJson = JSON.stringify(b.data || {});
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
      };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  async deletePage(pageId) {
    const [result] = await pool.query(
      `DELETE FROM cms_pages WHERE page_id = ? OR slug = ?`,
      [pageId, pageId]
    );
    return result.affectedRows > 0;
  }

  // ==========================================
  // USERS & AUTH
  // ==========================================

  async getAllUsers() {
    const [rows] = await pool.query(
      `SELECT id, name, email, role, status, last_login, created_at, updated_at FROM cms_users ORDER BY created_at ASC`
    );
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
    const [rows] = await pool.query(
      `SELECT * FROM cms_users WHERE email = ? LIMIT 1`,
      [email.trim().toLowerCase()]
    );
    return rows[0] || null;
  }

  async saveUser({ id, name, email, role, password }) {
    const userId = id || `usr-${Date.now()}`;
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();
    const userRole = role === 'Admin' ? 'Admin' : 'Editor';

    if (password) {
      const hashedPassword = await bcrypt.hash(password.trim(), 10);
      await pool.query(
        `INSERT INTO cms_users (id, name, email, role, status, password, last_login)
         VALUES (?, ?, ?, ?, 'Active', ?, 'Never')
         ON DUPLICATE KEY UPDATE
           name = VALUES(name),
           role = VALUES(role),
           password = VALUES(password)`,
        [userId, cleanName, cleanEmail, userRole, hashedPassword]
      );
    } else {
      await pool.query(
        `INSERT INTO cms_users (id, name, email, role, status, password, last_login)
         VALUES (?, ?, ?, ?, 'Active', 'password123', 'Never')
         ON DUPLICATE KEY UPDATE
           name = VALUES(name),
           role = VALUES(role)`,
        [userId, cleanName, cleanEmail, userRole]
      );
    }

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
    const [result] = await pool.query(
      `DELETE FROM cms_users WHERE id = ? OR email = ?`,
      [userId, userId]
    );
    return result.affectedRows > 0;
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
        await pool.query(`UPDATE cms_users SET password = ? WHERE id = ?`, [newHash, user.id]);
      }
    }

    if (!isMatch) return null;

    // Update last login
    const nowStr = new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' });
    await pool.query(`UPDATE cms_users SET last_login = ? WHERE id = ?`, [nowStr, user.id]);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }
}

module.exports = new CmsService();

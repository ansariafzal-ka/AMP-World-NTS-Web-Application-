const { sql, getPool } = require('../config/database');
const { ApiError } = require('../utils/ApiError');
const bcrypt = require('bcryptjs');

/**
 * CMS Service
 * Interacts with Microsoft SQL Server exclusively via T-SQL Stored Procedures under the CMS schema.
 */
class CmsService {
  // ==========================================
  // PAGES & BLOCKS
  // ==========================================

  async getAllPages() {
    const pool = await getPool();
    const result = await pool.request().execute('CMS.SP_Get_All_Pages');
    const rows = result.recordset || [];

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
    const pool = await getPool();
    const result = await pool.request()
      .input('PageId', sql.NVarChar(64), String(pageId))
      .execute('CMS.SP_Get_Page_By_Id');

    const pages = result.recordsets[0] || [];
    if (pages.length === 0) {
      throw new ApiError(404, `Page not found for id "${pageId}"`);
    }

    const page = pages[0];
    const blocks = result.recordsets[1] || [];

    return {
      id: page.page_id,
      title: page.title,
      slug: page.slug,
      status: page.status,
      metaTitle: page.meta_title || '',
      metaDescription: page.meta_description || '',
      updatedAt: page.updated_at,
      createdAt: page.created_at,
      blocks: blocks.map((b) => {
        let parsedContent = {};
        try {
          parsedContent = typeof b.content_json === 'string' ? JSON.parse(b.content_json) : (b.content_json || {});
        } catch {
          parsedContent = {};
        }
        return {
          id: b.id,
          type: b.block_type,
          content: parsedContent,
          isVisible: Boolean(b.is_visible),
          sortOrder: b.sort_order,
        };
      }),
    };
  }

  async getPageBySlug(slug) {
    const cleanSlug = slug.replace(/^\/+/, '');
    const pool = await getPool();
    const result = await pool.request()
      .input('Slug', sql.NVarChar(255), cleanSlug)
      .execute('CMS.SP_Get_Page_By_Slug');

    const pages = result.recordsets[0] || [];
    if (pages.length === 0) {
      throw new ApiError(404, `Page not found for slug "${cleanSlug}"`);
    }

    const page = pages[0];
    const blocks = result.recordsets[1] || [];

    return {
      id: page.page_id,
      title: page.title,
      slug: page.slug,
      status: page.status,
      metaTitle: page.meta_title || '',
      metaDescription: page.meta_description || '',
      updatedAt: page.updated_at,
      createdAt: page.created_at,
      blocks: blocks.map((b) => {
        let parsedContent = {};
        try {
          parsedContent = typeof b.content_json === 'string' ? JSON.parse(b.content_json) : (b.content_json || {});
        } catch {
          parsedContent = {};
        }
        return {
          id: b.id,
          type: b.block_type,
          content: parsedContent,
          isVisible: Boolean(b.is_visible),
          sortOrder: b.sort_order,
        };
      }),
    };
  }

  async savePage(pageData) {
    const pageId = pageData.id || `pg-${Date.now()}`;
    const title = (pageData.title || 'Untitled Page').trim();
    const slug = (pageData.slug || title.replace(/[^a-zA-Z0-9-_]+/g, '-').replace(/(^-|-$)/g, ''))
      .replace(/^\/+/, '');
    const status = pageData.status === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT';
    const metaTitle = pageData.metaTitle || title;
    const metaDescription = pageData.metaDescription || '';

    const pool = await getPool();

    // Delegate page upsert & uniqueness validation to SQL Server procedure
    try {
      await pool.request()
        .input('PageId', sql.NVarChar(64), pageId)
        .input('Title', sql.NVarChar(255), title)
        .input('Slug', sql.NVarChar(255), slug)
        .input('Status', sql.NVarChar(20), status)
        .input('MetaTitle', sql.NVarChar(255), metaTitle)
        .input('MetaDescription', sql.NVarChar(sql.MAX), metaDescription)
        .execute('CMS.SP_Upsert_Page');
    } catch (err) {
      if (err.number === 50001 || (err.message && err.message.toLowerCase().includes('slug is already in use'))) {
        throw new ApiError(409, 'Slug is already in use by another page');
      }
      throw err;
    }

    // Synchronize blocks via stored procedures
    if (Array.isArray(pageData.blocks)) {
      await pool.request()
        .input('PageId', sql.NVarChar(64), pageId)
        .execute('CMS.SP_Delete_Page_Blocks');

      for (let i = 0; i < pageData.blocks.length; i++) {
        const b = pageData.blocks[i];
        const blockId = b.id || `blk-${Date.now()}-${i}`;
        const blockType = b.type || 'Text';
        const contentJson = JSON.stringify(b.data || b.content || {});
        const isVisible = b.isVisible !== false ? 1 : 0;
        const sortOrder = typeof b.sortOrder === 'number' ? b.sortOrder : i;

        await pool.request()
          .input('BlockId', sql.NVarChar(64), blockId)
          .input('PageId', sql.NVarChar(64), pageId)
          .input('BlockType', sql.NVarChar(50), blockType)
          .input('SortOrder', sql.Int, sortOrder)
          .input('ContentJson', sql.NVarChar(sql.MAX), contentJson)
          .input('IsVisible', sql.TinyInt, isVisible)
          .execute('CMS.SP_Save_Page_Block');
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
    const pool = await getPool();
    const result = await pool.request()
      .input('PageId', sql.NVarChar(64), String(pageId))
      .execute('CMS.SP_Delete_Page');
    const affected = result.recordset?.[0]?.affected_rows || 0;
    return affected > 0;
  }

  // ==========================================
  // USERS & AUTH
  // ==========================================

  async getAllUsers() {
    const pool = await getPool();
    const result = await pool.request().execute('CMS.SP_Get_All_Users');
    const rows = result.recordset || [];

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
    const pool = await getPool();
    const result = await pool.request()
      .input('Email', sql.NVarChar(255), email.trim().toLowerCase())
      .execute('CMS.SP_Get_User_By_Email');
    return result.recordset?.[0] || null;
  }

  async saveUser({ id, name, email, role, password }) {
    const userId = id || `usr-${Date.now()}`;
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();
    const userRole = role === 'Admin' ? 'Admin' : 'Editor';
    const hasPassword = Boolean(password);
    const hashedPassword = password ? await bcrypt.hash(password.trim(), 10) : '';

    const pool = await getPool();
    await pool.request()
      .input('UserId', sql.NVarChar(64), userId)
      .input('Name', sql.NVarChar(255), cleanName)
      .input('Email', sql.NVarChar(255), cleanEmail)
      .input('Role', sql.NVarChar(20), userRole)
      .input('Password', sql.NVarChar(255), hashedPassword)
      .input('HasPassword', sql.TinyInt, hasPassword ? 1 : 0)
      .execute('CMS.SP_Upsert_User');

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
    const pool = await getPool();
    const result = await pool.request()
      .input('UserId', sql.NVarChar(64), String(userId))
      .execute('CMS.SP_Delete_User');
    const affected = result.recordset?.[0]?.affected_rows || 0;
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
        const pool = await getPool();
        await pool.request()
          .input('UserId', sql.NVarChar(64), user.id)
          .input('NewPassword', sql.NVarChar(255), newHash)
          .execute('CMS.SP_Update_User_Password');
      }
    }

    if (!isMatch) return null;

    // Update last login via procedure
    const nowStr = new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' });
    const pool = await getPool();
    await pool.request()
      .input('UserId', sql.NVarChar(64), user.id)
      .input('LastLogin', sql.NVarChar(100), nowStr)
      .execute('CMS.SP_Update_User_Login');

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }
}

module.exports = new CmsService();

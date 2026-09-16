-- =======================================================================
-- CMS DATABASE ARCHITECTURE (Clean Development Reset)
-- Project: AMP National Talent Search (AMP NTS)
-- Compatible with: MySQL 5.7+ / MySQL 8.0+ / MySQL 9.x / Workbench
-- =======================================================================

-- 1. Clean Reset: Drop and Recreate Database
CREATE DATABASE amp_nts CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE amp_nts;

-- 2. Table: cms_pages
CREATE TABLE cms_pages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    page_id VARCHAR(64) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    status ENUM('DRAFT', 'PUBLISHED') NOT NULL DEFAULT 'DRAFT',
    meta_title VARCHAR(255) NULL,
    meta_description TEXT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_cms_pages_slug (slug),
    INDEX idx_cms_pages_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Table: cms_page_blocks
CREATE TABLE cms_page_blocks (
    id VARCHAR(64) PRIMARY KEY,
    page_id VARCHAR(64) NOT NULL,
    block_type VARCHAR(50) NOT NULL, -- Hero, Text, Image, Cards, Features, Accordion, CTA
    sort_order INT NOT NULL DEFAULT 0,
    content_json LONGTEXT NOT NULL,
    is_visible TINYINT(1) NOT NULL DEFAULT 1,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_page_blocks_page_sort (page_id, sort_order),
    CONSTRAINT fk_cms_blocks_pages FOREIGN KEY (page_id) 
        REFERENCES cms_pages(page_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Table: cms_users
CREATE TABLE cms_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role ENUM('Admin', 'Editor') NOT NULL DEFAULT 'Editor',
    status ENUM('Active', 'Inactive') NOT NULL DEFAULT 'Active',
    last_login VARCHAR(100) NULL DEFAULT 'Never',
    password VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_cms_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Seed Initial CMS Users
INSERT INTO cms_users (id, name, email, role, status, last_login, password)
VALUES 
    ('usr-1', 'Admin User', 'admin@ampindia.org', 'Admin', 'Active', 'Today, 6:30 PM', 'password123'),
    ('usr-2', 'NTS Content Editor', 'editor@ampindia.org', 'Editor', 'Active', 'Yesterday, 4:15 PM', 'password123');

-- =======================================================================
-- 6. STORED PROCEDURES (Unified utf8mb4_unicode_ci)
-- =======================================================================

DELIMITER //

-- Procedure 1: Get all pages with block count
DROP PROCEDURE IF EXISTS sp_cms_get_all_pages //
CREATE PROCEDURE sp_cms_get_all_pages()
BEGIN
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
    ORDER BY p.updated_at DESC;
END //

-- Procedure 2: Get page by page_id or id, including all blocks
DROP PROCEDURE IF EXISTS sp_cms_get_page_by_id //
CREATE PROCEDURE sp_cms_get_page_by_id(
    IN p_id VARCHAR(64)
)
BEGIN
    -- Select page metadata
    SELECT 
        id, page_id, title, slug, status, meta_title, meta_description, created_at, updated_at
    FROM cms_pages 
    WHERE page_id = p_id OR id = p_id 
    LIMIT 1;

    -- Select page blocks ordered
    SELECT 
        b.id, b.page_id, b.block_type, b.sort_order, b.content_json, b.is_visible, b.created_at, b.updated_at
    FROM cms_page_blocks b
    JOIN cms_pages p ON b.page_id = p.page_id
    WHERE p.page_id = p_id OR p.id = p_id
    ORDER BY b.sort_order ASC;
END //

-- Procedure 3: Get published page by case-insensitive slug, including visible blocks
DROP PROCEDURE IF EXISTS sp_cms_get_page_by_slug //
CREATE PROCEDURE sp_cms_get_page_by_slug(
    IN p_slug VARCHAR(255)
)
BEGIN
    DECLARE v_clean_slug VARCHAR(255);
    SET v_clean_slug = TRIM(BOTH '/' FROM p_slug);

    -- Select page
    SELECT 
        id, page_id, title, slug, status, meta_title, meta_description, created_at, updated_at
    FROM cms_pages 
    WHERE LOWER(slug) = LOWER(v_clean_slug) 
    LIMIT 1;

    -- Select visible blocks
    SELECT 
        b.id, b.page_id, b.block_type, b.sort_order, b.content_json, b.is_visible, b.created_at, b.updated_at
    FROM cms_page_blocks b
    JOIN cms_pages p ON b.page_id = p.page_id
    WHERE LOWER(p.slug) = LOWER(v_clean_slug) AND b.is_visible = 1
    ORDER BY b.sort_order ASC;
END //

-- Procedure 4: Upsert page metadata with business logic (slug uniqueness validation)
DROP PROCEDURE IF EXISTS sp_cms_upsert_page //
CREATE PROCEDURE sp_cms_upsert_page(
    IN p_page_id VARCHAR(64),
    IN p_title VARCHAR(255),
    IN p_slug VARCHAR(255),
    IN p_status VARCHAR(20),
    IN p_meta_title VARCHAR(255),
    IN p_meta_description TEXT
)
BEGIN
    DECLARE v_clean_slug VARCHAR(255);
    DECLARE v_slug_exists INT DEFAULT 0;

    SET v_clean_slug = TRIM(BOTH '/' FROM p_slug);

    -- Business Logic: Validate slug uniqueness across different pages
    SELECT COUNT(*) INTO v_slug_exists 
    FROM cms_pages 
    WHERE LOWER(slug) = LOWER(v_clean_slug) 
      AND page_id != p_page_id;

    IF v_slug_exists > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Slug is already in use by another page';
    END IF;

    -- Insert or update page
    INSERT INTO cms_pages (page_id, title, slug, status, meta_title, meta_description, updated_at)
    VALUES (
        p_page_id, 
        TRIM(p_title), 
        v_clean_slug, 
        IF(p_status = 'PUBLISHED', 'PUBLISHED', 'DRAFT'), 
        IFNULL(p_meta_title, TRIM(p_title)), 
        IFNULL(p_meta_description, ''), 
        NOW()
    )
    ON DUPLICATE KEY UPDATE
        title = VALUES(title),
        slug = VALUES(slug),
        status = VALUES(status),
        meta_title = VALUES(meta_title),
        meta_description = VALUES(meta_description),
        updated_at = NOW();

    -- Return the upserted page record
    SELECT * FROM cms_pages WHERE page_id = p_page_id LIMIT 1;
END //

-- Procedure 5: Delete all blocks for a page (atomic cleanup before block save)
DROP PROCEDURE IF EXISTS sp_cms_delete_page_blocks //
CREATE PROCEDURE sp_cms_delete_page_blocks(
    IN p_page_id VARCHAR(64)
)
BEGIN
    DELETE FROM cms_page_blocks WHERE page_id = p_page_id;
END //

-- Procedure 6: Insert or replace an individual content block
DROP PROCEDURE IF EXISTS sp_cms_save_page_block //
CREATE PROCEDURE sp_cms_save_page_block(
    IN p_block_id VARCHAR(64),
    IN p_page_id VARCHAR(64),
    IN p_block_type VARCHAR(50),
    IN p_sort_order INT,
    IN p_content_json LONGTEXT,
    IN p_is_visible TINYINT(1)
)
BEGIN
    INSERT INTO cms_page_blocks (id, page_id, block_type, sort_order, content_json, is_visible, updated_at)
    VALUES (p_block_id, p_page_id, p_block_type, p_sort_order, p_content_json, p_is_visible, NOW())
    ON DUPLICATE KEY UPDATE
        block_type = VALUES(block_type),
        sort_order = VALUES(sort_order),
        content_json = VALUES(content_json),
        is_visible = VALUES(is_visible),
        updated_at = NOW();
END //

-- Procedure 7: Delete page and associated blocks
DROP PROCEDURE IF EXISTS sp_cms_delete_page //
CREATE PROCEDURE sp_cms_delete_page(
    IN p_page_id VARCHAR(64)
)
BEGIN
    DELETE FROM cms_pages 
    WHERE page_id = p_page_id 
       OR slug = p_page_id;
    SELECT ROW_COUNT() AS affected_rows;
END //

-- Procedure 8: Get all CMS users
DROP PROCEDURE IF EXISTS sp_cms_get_all_users //
CREATE PROCEDURE sp_cms_get_all_users()
BEGIN
    SELECT id, name, email, role, status, last_login, created_at, updated_at
    FROM cms_users
    ORDER BY created_at ASC;
END //

-- Procedure 9: Get user by email
DROP PROCEDURE IF EXISTS sp_cms_get_user_by_email //
CREATE PROCEDURE sp_cms_get_user_by_email(
    IN p_email VARCHAR(255)
)
BEGIN
    SELECT id, name, email, role, status, password, last_login, created_at, updated_at
    FROM cms_users
    WHERE LOWER(email) = LOWER(TRIM(p_email))
    LIMIT 1;
END //

-- Procedure 10: Upsert user with business logic (conditional password update)
DROP PROCEDURE IF EXISTS sp_cms_upsert_user //
CREATE PROCEDURE sp_cms_upsert_user(
    IN p_user_id VARCHAR(64),
    IN p_name VARCHAR(255),
    IN p_email VARCHAR(255),
    IN p_role VARCHAR(20),
    IN p_password VARCHAR(255),
    IN p_has_password TINYINT(1)
)
BEGIN
    DECLARE v_clean_email VARCHAR(255);
    SET v_clean_email = LOWER(TRIM(p_email));

    IF p_has_password = 1 AND p_password IS NOT NULL AND p_password != '' THEN
        INSERT INTO cms_users (id, name, email, role, status, password, last_login)
        VALUES (p_user_id, TRIM(p_name), v_clean_email, IF(p_role = 'Admin', 'Admin', 'Editor'), 'Active', p_password, 'Never')
        ON DUPLICATE KEY UPDATE
            name = VALUES(name),
            role = VALUES(role),
            password = VALUES(password),
            status = 'Active';
    ELSE
        INSERT INTO cms_users (id, name, email, role, status, password, last_login)
        VALUES (p_user_id, TRIM(p_name), v_clean_email, IF(p_role = 'Admin', 'Admin', 'Editor'), 'Active', 'password123', 'Never')
        ON DUPLICATE KEY UPDATE
            name = VALUES(name),
            role = VALUES(role),
            status = 'Active';
    END IF;

    SELECT id, name, email, role, status, last_login, created_at, updated_at
    FROM cms_users
    WHERE id = p_user_id;
END //

-- Procedure 11: Delete user
DROP PROCEDURE IF EXISTS sp_cms_delete_user //
CREATE PROCEDURE sp_cms_delete_user(
    IN p_user_id VARCHAR(64)
)
BEGIN
    DELETE FROM cms_users 
    WHERE id = p_user_id 
       OR LOWER(email) = LOWER(p_user_id);
    SELECT ROW_COUNT() AS affected_rows;
END //

-- Procedure 12: Update user login timestamp
DROP PROCEDURE IF EXISTS sp_cms_update_user_login //
CREATE PROCEDURE sp_cms_update_user_login(
    IN p_user_id VARCHAR(64),
    IN p_last_login VARCHAR(100)
)
BEGIN
    UPDATE cms_users 
    SET last_login = p_last_login 
    WHERE id = p_user_id;
END //

-- Procedure 13: Update user password hash
DROP PROCEDURE IF EXISTS sp_cms_update_user_password //
CREATE PROCEDURE sp_cms_update_user_password(
    IN p_user_id VARCHAR(64),
    IN p_new_password VARCHAR(255)
)
BEGIN
    UPDATE cms_users 
    SET password = p_new_password 
    WHERE id = p_user_id;
END //

DELIMITER ;

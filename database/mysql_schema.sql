-- =======================================================================
-- CMS DATABASE ARCHITECTURE (MySQL Edition)
-- Project: AMP National Talent Search (AMP NTS)
-- Compatible with: MySQL 5.7+ / MySQL 8.0+ / MySQL Workbench
-- =======================================================================

-- 1. Create and Select Database
CREATE DATABASE IF NOT EXISTS amp_nts CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE amp_nts;

-- 2. Table: cms_pages
CREATE TABLE IF NOT EXISTS cms_pages (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Table: cms_page_blocks
CREATE TABLE IF NOT EXISTS cms_page_blocks (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Table: cms_users
CREATE TABLE IF NOT EXISTS cms_users (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 5. Seed Initial CMS Users
INSERT INTO cms_users (id, name, email, role, status, last_login, password)
VALUES 
    ('usr-1', 'Admin User', 'admin@ampindia.org', 'Admin', 'Active', 'Today, 6:30 PM', 'password123'),
    ('usr-2', 'NTS Content Editor', 'editor@ampindia.org', 'Editor', 'Active', 'Yesterday, 4:15 PM', 'password123')
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    role = VALUES(role),
    password = VALUES(password);

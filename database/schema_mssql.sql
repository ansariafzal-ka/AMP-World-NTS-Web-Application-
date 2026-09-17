-- =======================================================================
-- CMS DATABASE ARCHITECTURE (Microsoft SQL Server / T-SQL Edition)
-- Project: AMP National Talent Search (AMP NTS)
-- Compatible with: SQL Server 2019 / 2022 / 2025 / Azure SQL
-- Schema Namespace: CMS
-- =======================================================================

-- 1. Create Database
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'AMP_NTS')
BEGIN
    CREATE DATABASE AMP_NTS;
END
GO

USE AMP_NTS;
GO

-- 2. Create Schema: CMS
IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = 'CMS')
BEGIN
    EXEC('CREATE SCHEMA CMS');
END
GO

-- 3. Table: CMS.Pages
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Pages' AND schema_id = SCHEMA_ID('CMS'))
BEGIN
    CREATE TABLE CMS.Pages (
        id INT IDENTITY(1,1) PRIMARY KEY,
        page_id NVARCHAR(64) NOT NULL UNIQUE,
        title NVARCHAR(255) NOT NULL,
        slug NVARCHAR(255) NOT NULL UNIQUE,
        status NVARCHAR(20) NOT NULL DEFAULT 'DRAFT', -- 'DRAFT' or 'PUBLISHED'
        meta_title NVARCHAR(255) NULL,
        meta_description NVARCHAR(MAX) NULL,
        created_at DATETIME2 NOT NULL DEFAULT GETDATE(),
        updated_at DATETIME2 NOT NULL DEFAULT GETDATE()
    );

    CREATE INDEX idx_cms_pages_slug ON CMS.Pages(slug);
    CREATE INDEX idx_cms_pages_status ON CMS.Pages(status);
END
GO

-- 4. Table: CMS.PageBlocks
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'PageBlocks' AND schema_id = SCHEMA_ID('CMS'))
BEGIN
    CREATE TABLE CMS.PageBlocks (
        id NVARCHAR(64) PRIMARY KEY,
        page_id NVARCHAR(64) NOT NULL,
        block_type NVARCHAR(50) NOT NULL, -- Hero, Text, Image, Cards, Features, Accordion, CTA
        sort_order INT NOT NULL DEFAULT 0,
        content_json NVARCHAR(MAX) NOT NULL,
        is_visible TINYINT NOT NULL DEFAULT 1,
        created_at DATETIME2 NOT NULL DEFAULT GETDATE(),
        updated_at DATETIME2 NOT NULL DEFAULT GETDATE(),
        CONSTRAINT fk_cms_blocks_pages FOREIGN KEY (page_id) 
            REFERENCES CMS.Pages(page_id) ON DELETE CASCADE
    );

    CREATE INDEX idx_page_blocks_page_sort ON CMS.PageBlocks(page_id, sort_order);
END
GO

-- 5. Table: CMS.Users
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Users' AND schema_id = SCHEMA_ID('CMS'))
BEGIN
    CREATE TABLE CMS.Users (
        id NVARCHAR(64) PRIMARY KEY,
        name NVARCHAR(255) NOT NULL,
        email NVARCHAR(255) NOT NULL UNIQUE,
        role NVARCHAR(20) NOT NULL DEFAULT 'Editor', -- 'Admin' or 'Editor'
        status NVARCHAR(20) NOT NULL DEFAULT 'Active', -- 'Active' or 'Inactive'
        last_login NVARCHAR(100) NULL DEFAULT 'Never',
        password NVARCHAR(255) NOT NULL,
        created_at DATETIME2 NOT NULL DEFAULT GETDATE(),
        updated_at DATETIME2 NOT NULL DEFAULT GETDATE()
    );

    CREATE INDEX idx_cms_users_email ON CMS.Users(email);
END
GO

-- 6. Seed Initial Users
IF NOT EXISTS (SELECT 1 FROM CMS.Users WHERE id = 'usr-1')
BEGIN
    INSERT INTO CMS.Users (id, name, email, role, status, last_login, password)
    VALUES ('usr-1', 'Admin User', 'admin@ampindia.org', 'Admin', 'Active', 'Today, 6:30 PM', 'password123');
END

IF NOT EXISTS (SELECT 1 FROM CMS.Users WHERE id = 'usr-2')
BEGIN
    INSERT INTO CMS.Users (id, name, email, role, status, last_login, password)
    VALUES ('usr-2', 'NTS Content Editor', 'editor@ampindia.org', 'Editor', 'Active', 'Yesterday, 4:15 PM', 'password123');
END
GO

-- =======================================================================
-- 7. T-SQL STORED PROCEDURES (Namespace: CMS)
-- =======================================================================

-- Procedure 1: Get All Pages
CREATE OR ALTER PROCEDURE CMS.SP_Get_All_Pages
AS
BEGIN
    SET NOCOUNT ON;

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
    FROM CMS.Pages p
    LEFT JOIN CMS.PageBlocks b ON p.page_id = b.page_id
    GROUP BY p.id, p.page_id, p.title, p.slug, p.status, p.meta_title, p.meta_description, p.created_at, p.updated_at
    ORDER BY p.updated_at DESC;
END
GO

-- Procedure 2: Get Page By ID
CREATE OR ALTER PROCEDURE CMS.SP_Get_Page_By_Id
    @PageId NVARCHAR(64)
AS
BEGIN
    SET NOCOUNT ON;

    -- Page Record
    SELECT TOP 1
        id, page_id, title, slug, status, meta_title, meta_description, created_at, updated_at
    FROM CMS.Pages
    WHERE page_id = @PageId OR CAST(id AS NVARCHAR(64)) = @PageId;

    -- Associated Blocks
    SELECT 
        b.id, b.page_id, b.block_type, b.sort_order, b.content_json, b.is_visible, b.created_at, b.updated_at
    FROM CMS.PageBlocks b
    JOIN CMS.Pages p ON b.page_id = p.page_id
    WHERE p.page_id = @PageId OR CAST(p.id AS NVARCHAR(64)) = @PageId
    ORDER BY b.sort_order ASC;
END
GO

-- Procedure 3: Get Published Page By Slug
CREATE OR ALTER PROCEDURE CMS.SP_Get_Page_By_Slug
    @Slug NVARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @CleanSlug NVARCHAR(255) = LOWER(LTRIM(RTRIM(REPLACE(REPLACE(@Slug, '/', ''), '\', ''))));

    -- Page Record
    SELECT TOP 1
        id, page_id, title, slug, status, meta_title, meta_description, created_at, updated_at
    FROM CMS.Pages
    WHERE LOWER(slug) = @CleanSlug;

    -- Visible Blocks
    SELECT 
        b.id, b.page_id, b.block_type, b.sort_order, b.content_json, b.is_visible, b.created_at, b.updated_at
    FROM CMS.PageBlocks b
    JOIN CMS.Pages p ON b.page_id = p.page_id
    WHERE LOWER(p.slug) = @CleanSlug AND b.is_visible = 1
    ORDER BY b.sort_order ASC;
END
GO

-- Procedure 4: Upsert Page (Includes Slug Duplicate Check)
CREATE OR ALTER PROCEDURE CMS.SP_Upsert_Page
    @PageId NVARCHAR(64),
    @Title NVARCHAR(255),
    @Slug NVARCHAR(255),
    @Status NVARCHAR(20),
    @MetaTitle NVARCHAR(255) = NULL,
    @MetaDescription NVARCHAR(MAX) = NULL
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @CleanSlug NVARCHAR(255) = LTRIM(RTRIM(REPLACE(REPLACE(@Slug, '/', ''), '\', '')));

    -- Business Logic: Validate slug uniqueness
    IF EXISTS (
        SELECT 1 FROM CMS.Pages 
        WHERE LOWER(slug) = LOWER(@CleanSlug) AND page_id != @PageId
    )
    BEGIN
        THROW 50001, 'Slug is already in use by another page', 1;
    END

    -- Upsert Page
    MERGE INTO CMS.Pages AS target
    USING (SELECT @PageId AS page_id) AS source
    ON target.page_id = source.page_id
    WHEN MATCHED THEN
        UPDATE SET 
            title = LTRIM(RTRIM(@Title)),
            slug = @CleanSlug,
            status = CASE WHEN @Status = 'PUBLISHED' THEN 'PUBLISHED' ELSE 'DRAFT' END,
            meta_title = ISNULL(@MetaTitle, LTRIM(RTRIM(@Title))),
            meta_description = ISNULL(@MetaDescription, ''),
            updated_at = GETDATE()
    WHEN NOT MATCHED THEN
        INSERT (page_id, title, slug, status, meta_title, meta_description, created_at, updated_at)
        VALUES (
            @PageId, 
            LTRIM(RTRIM(@Title)), 
            @CleanSlug, 
            CASE WHEN @Status = 'PUBLISHED' THEN 'PUBLISHED' ELSE 'DRAFT' END, 
            ISNULL(@MetaTitle, LTRIM(RTRIM(@Title))), 
            ISNULL(@MetaDescription, ''), 
            GETDATE(), 
            GETDATE()
        );

    SELECT TOP 1 * FROM CMS.Pages WHERE page_id = @PageId;
END
GO

-- Procedure 5: Delete Page Blocks
CREATE OR ALTER PROCEDURE CMS.SP_Delete_Page_Blocks
    @PageId NVARCHAR(64)
AS
BEGIN
    SET NOCOUNT ON;
    DELETE FROM CMS.PageBlocks WHERE page_id = @PageId;
END
GO

-- Procedure 6: Save Single Block
CREATE OR ALTER PROCEDURE CMS.SP_Save_Page_Block
    @BlockId NVARCHAR(64),
    @PageId NVARCHAR(64),
    @BlockType NVARCHAR(50),
    @SortOrder INT,
    @ContentJson NVARCHAR(MAX),
    @IsVisible TINYINT
AS
BEGIN
    SET NOCOUNT ON;

    MERGE INTO CMS.PageBlocks AS target
    USING (SELECT @BlockId AS id) AS source
    ON target.id = source.id
    WHEN MATCHED THEN
        UPDATE SET 
            block_type = @BlockType,
            sort_order = @SortOrder,
            content_json = @ContentJson,
            is_visible = @IsVisible,
            updated_at = GETDATE()
    WHEN NOT MATCHED THEN
        INSERT (id, page_id, block_type, sort_order, content_json, is_visible, created_at, updated_at)
        VALUES (@BlockId, @PageId, @BlockType, @SortOrder, @ContentJson, @IsVisible, GETDATE(), GETDATE());
END
GO

-- Procedure 7: Delete Page
CREATE OR ALTER PROCEDURE CMS.SP_Delete_Page
    @PageId NVARCHAR(64)
AS
BEGIN
    SET NOCOUNT ON;

    DELETE FROM CMS.Pages WHERE page_id = @PageId OR slug = @PageId;
    SELECT @@ROWCOUNT AS affected_rows;
END
GO

-- Procedure 8: Get All Users
CREATE OR ALTER PROCEDURE CMS.SP_Get_All_Users
AS
BEGIN
    SET NOCOUNT ON;

    SELECT id, name, email, role, status, last_login, created_at, updated_at
    FROM CMS.Users
    ORDER BY created_at ASC;
END
GO

-- Procedure 9: Get User By Email
CREATE OR ALTER PROCEDURE CMS.SP_Get_User_By_Email
    @Email NVARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT TOP 1 id, name, email, role, status, password, last_login, created_at, updated_at
    FROM CMS.Users
    WHERE LOWER(email) = LOWER(LTRIM(RTRIM(@Email)));
END
GO

-- Procedure 10: Upsert User
CREATE OR ALTER PROCEDURE CMS.SP_Upsert_User
    @UserId NVARCHAR(64),
    @Name NVARCHAR(255),
    @Email NVARCHAR(255),
    @Role NVARCHAR(20),
    @Password NVARCHAR(255) = NULL,
    @HasPassword TINYINT = 0
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @CleanEmail NVARCHAR(255) = LOWER(LTRIM(RTRIM(@Email)));
    DECLARE @CleanRole NVARCHAR(20) = CASE WHEN @Role = 'Admin' THEN 'Admin' ELSE 'Editor' END;

    IF @HasPassword = 1 AND @Password IS NOT NULL AND @Password <> ''
    BEGIN
        MERGE INTO CMS.Users AS target
        USING (SELECT @UserId AS id) AS source
        ON target.id = source.id
        WHEN MATCHED THEN
            UPDATE SET 
                name = LTRIM(RTRIM(@Name)),
                role = @CleanRole,
                password = @Password,
                status = 'Active',
                updated_at = GETDATE()
        WHEN NOT MATCHED THEN
            INSERT (id, name, email, role, status, password, last_login, created_at, updated_at)
            VALUES (@UserId, LTRIM(RTRIM(@Name)), @CleanEmail, @CleanRole, 'Active', @Password, 'Never', GETDATE(), GETDATE());
    END
    ELSE
    BEGIN
        MERGE INTO CMS.Users AS target
        USING (SELECT @UserId AS id) AS source
        ON target.id = source.id
        WHEN MATCHED THEN
            UPDATE SET 
                name = LTRIM(RTRIM(@Name)),
                role = @CleanRole,
                status = 'Active',
                updated_at = GETDATE()
        WHEN NOT MATCHED THEN
            INSERT (id, name, email, role, status, password, last_login, created_at, updated_at)
            VALUES (@UserId, LTRIM(RTRIM(@Name)), @CleanEmail, @CleanRole, 'Active', 'password123', 'Never', GETDATE(), GETDATE());
    END

    SELECT TOP 1 id, name, email, role, status, last_login, created_at, updated_at
    FROM CMS.Users
    WHERE id = @UserId;
END
GO

-- Procedure 11: Delete User
CREATE OR ALTER PROCEDURE CMS.SP_Delete_User
    @UserId NVARCHAR(64)
AS
BEGIN
    SET NOCOUNT ON;

    DELETE FROM CMS.Users 
    WHERE id = @UserId OR LOWER(email) = LOWER(@UserId);
    
    SELECT @@ROWCOUNT AS affected_rows;
END
GO

-- Procedure 12: Update User Last Login
CREATE OR ALTER PROCEDURE CMS.SP_Update_User_Login
    @UserId NVARCHAR(64),
    @LastLogin NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE CMS.Users 
    SET last_login = @LastLogin, updated_at = GETDATE()
    WHERE id = @UserId;
END
GO

-- Procedure 13: Update User Password Hash
CREATE OR ALTER PROCEDURE CMS.SP_Update_User_Password
    @UserId NVARCHAR(64),
    @NewPassword NVARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE CMS.Users 
    SET password = @NewPassword, updated_at = GETDATE()
    WHERE id = @UserId;
END
GO

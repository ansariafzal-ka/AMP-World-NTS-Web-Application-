-- =======================================================================
-- EXAM CENTRE STORED PROCEDURES (Microsoft SQL Server / T-SQL)
-- Project: AMP National Talent Search (AMP NTS)
-- Target Database: AMPWorld_team
-- Schema Namespace: EXAMCENTRE
-- =======================================================================

USE AMPWorld_team;
GO

-- 1. Ensure Schema Exists
IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = 'EXAMCENTRE')
BEGIN
    EXEC('CREATE SCHEMA EXAMCENTRE');
END
GO

-- =======================================================================
-- Procedure 1: EXAMCENTRE.sp_ExamCentre_GetByMobile
-- Purpose: Checks whether a 10-digit mobile number belongs to an
--          Exam Centre contact person or an Observer.
-- Usage:   Used by the portal login and mobile verification API.
-- =======================================================================
CREATE OR ALTER PROCEDURE EXAMCENTRE.sp_ExamCentre_GetByMobile
(
    @Mobile VARCHAR(20)
)
AS
BEGIN
    SET NOCOUNT ON;

    -- Normalize to last 10 digits
    DECLARE @CleanMobile VARCHAR(10) = RIGHT(REPLACE(REPLACE(REPLACE(LTRIM(RTRIM(@Mobile)), ' ', ''), '-', ''), '+91', ''), 10);

    -- 1. Check EXAMCENTRE.ExamCentre (Centre Head / In-charge)
    IF EXISTS (
        SELECT 1 
        FROM EXAMCENTRE.ExamCentre 
        WHERE (RIGHT(REPLACE(REPLACE(ContactPhone, ' ', ''), '-', ''), 10) = @CleanMobile)
          AND IsDeleted = 0
    )
    BEGIN
        SELECT TOP 1
            Id,
            ExamCentreCode,
            CentreName,
            ContactPerson,
            ContactPhone,
            Status,
            'ExamCenter' AS [Role]
        FROM EXAMCENTRE.ExamCentre
        WHERE (RIGHT(REPLACE(REPLACE(ContactPhone, ' ', ''), '-', ''), 10) = @CleanMobile)
          AND IsDeleted = 0;
        RETURN;
    END

    -- 2. Check EXAMCENTRE.ExamCentreObserver (Observer login)
    IF EXISTS (
        SELECT 1 
        FROM EXAMCENTRE.ExamCentreObserver 
        WHERE (RIGHT(REPLACE(REPLACE(Mobile, ' ', ''), '-', ''), 10) = @CleanMobile)
          AND IsDeleted = 0
    )
    BEGIN
        SELECT TOP 1
            obs.Id,
            ec.ExamCentreCode,
            ec.CentreName,
            obs.Name AS ContactPerson,
            obs.Mobile AS ContactPhone,
            otm.ObserverTypeName,
            obs.Status,
            'Observer' AS [Role]
        FROM EXAMCENTRE.ExamCentreObserver obs
        LEFT JOIN EXAMCENTRE.ExamCentre ec 
            ON obs.ExamCentreRefId = ec.Id
        LEFT JOIN MASTER.ObserverTypeMaster otm
            ON obs.ObserverTypeId = otm.ObserverTypeId
        WHERE (RIGHT(REPLACE(REPLACE(obs.Mobile, ' ', ''), '-', ''), 10) = @CleanMobile)
          AND obs.IsDeleted = 0;
        RETURN;
    END

    -- 3. Return empty recordset if not found
    SELECT TOP 0
        CAST(NULL AS INT)           AS Id,
        CAST(NULL AS VARCHAR(50))   AS ExamCentreCode,
        CAST(NULL AS NVARCHAR(200)) AS CentreName,
        CAST(NULL AS NVARCHAR(150)) AS ContactPerson,
        CAST(NULL AS VARCHAR(20))   AS ContactPhone,
        CAST(NULL AS NVARCHAR(100)) AS ObserverTypeName,
        CAST(NULL AS VARCHAR(20))   AS Status,
        CAST(NULL AS VARCHAR(20))   AS [Role];
END
GO

-- =======================================================================
-- Procedure 2: EXAMCENTRE.sp_ExamCentre_GetByCode
-- Purpose: Retrieves an Exam Centre by its alphanumeric Code,
--          ExamCentreId, or numeric Id, delegating to sp_ExamCentre_GetById.
-- =======================================================================
CREATE OR ALTER PROCEDURE EXAMCENTRE.sp_ExamCentre_GetByCode
(
    @ExamCentreCode VARCHAR(50)
)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @Id INT = (
        SELECT TOP 1 Id 
        FROM EXAMCENTRE.ExamCentre 
        WHERE (
            ExamCentreCode = @ExamCentreCode 
            OR ExamCentreId = @ExamCentreCode 
            OR Id = TRY_CAST(@ExamCentreCode AS INT)
        )
        AND IsDeleted = 0
    );

    IF @Id IS NOT NULL
    BEGIN
        EXEC EXAMCENTRE.sp_ExamCentre_GetById @Id = @Id, @IncludeDeleted = 0;
    END
    ELSE
    BEGIN
        -- Empty result set if centre code doesn't exist
        SELECT TOP 0 * FROM EXAMCENTRE.ExamCentre;
    END
END
GO

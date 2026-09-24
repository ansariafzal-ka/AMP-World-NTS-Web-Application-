-- =======================================================================
-- EXAM CENTRE DASHBOARD DATABASE ARCHITECTURE (Microsoft SQL Server / T-SQL)
-- Project: AMP National Talent Search (AMP NTS) 2026
-- Schema Namespace: EXAMCENTRE
-- Tables:
--   - EXAMCENTRE.ExamCentre
--   - EXAMCENTRE.ExamCentreObserver
--   - EXAMCENTRE.ExamCentreStudentAllocation
--   - EXAMCENTRE.ExamCentreAttendanceSummary
-- Stored Procedures:
--   - EXAMCENTRE.sp_ExamCentre_GetDashboard
--   - EXAMCENTRE.sp_ExamCentre_SubmitAttendanceSummary
-- =======================================================================

-- 1. Ensure Target Database Exists & Switch Context
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'AMPWorld')
BEGIN
    CREATE DATABASE AMPWorld;
END
GO

USE AMPWorld;
GO

-- 2. Create Schema: EXAMCENTRE
IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = 'EXAMCENTRE')
BEGIN
    EXEC('CREATE SCHEMA EXAMCENTRE');
END
GO

-- =======================================================================
-- 3. Table: EXAMCENTRE.ExamCentre
-- =======================================================================
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'ExamCentre' AND schema_id = SCHEMA_ID('EXAMCENTRE'))
BEGIN
    CREATE TABLE EXAMCENTRE.ExamCentre (
        Id INT IDENTITY(1,1) PRIMARY KEY,
        ExamCentreId VARCHAR(20) NULL,
        ExamCentreCode VARCHAR(20) NOT NULL UNIQUE, -- e.g. 'AMPNTS25TG0644'
        CentreName NVARCHAR(200) NOT NULL,
        InstitutionName NVARCHAR(200) NOT NULL,
        Address NVARCHAR(300) NOT NULL,
        DistrictId INT NULL,
        DistrictName NVARCHAR(100) NULL,
        MandalId INT NULL,
        MandalName NVARCHAR(100) NULL,
        StateId INT NULL,
        StateName NVARCHAR(100) NULL,
        Pincode CHAR(6) NOT NULL,
        ContactPerson NVARCHAR(150) NOT NULL,
        ContactPhone VARCHAR(20) NOT NULL,
        ContactEmail VARCHAR(150) NULL,
        GoogleMapLink NVARCHAR(500) NULL,
        Capacity INT NOT NULL DEFAULT 0,
        ApprovedCapacity INT NOT NULL DEFAULT 0,
        Registered INT NOT NULL DEFAULT 0,
        Status VARCHAR(20) NOT NULL DEFAULT 'active', -- 'active', 'inactive', 'under_review'
        IsDeleted BIT NOT NULL DEFAULT 0,
        CreatedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
        CreatedBy INT NULL,
        UpdatedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
        UpdatedBy INT NULL,
        DeletedAt DATETIME2 NULL,
        DeletedBy INT NULL
    );

    CREATE INDEX idx_exam_centre_code ON EXAMCENTRE.ExamCentre(ExamCentreCode);
    CREATE INDEX idx_exam_centre_status ON EXAMCENTRE.ExamCentre(Status, IsDeleted);
END
GO

-- =======================================================================
-- 4. Table: EXAMCENTRE.ExamCentreObserver
-- =======================================================================
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'ExamCentreObserver' AND schema_id = SCHEMA_ID('EXAMCENTRE'))
BEGIN
    CREATE TABLE EXAMCENTRE.ExamCentreObserver (
        Id INT IDENTITY(1,1) PRIMARY KEY,
        ExamCentreRefId INT NOT NULL,
        ExamCentreCode VARCHAR(20) NOT NULL,
        ObserverTypeId INT NOT NULL DEFAULT 1,
        ObserverTypeName NVARCHAR(100) NOT NULL, -- 'AMP Observer' or 'Exam Centre Observer'
        Name NVARCHAR(150) NOT NULL,
        Mobile VARCHAR(20) NOT NULL,
        Email VARCHAR(150) NULL,
        Designation NVARCHAR(150) NULL,
        OrganizationName NVARCHAR(200) NULL,
        Status VARCHAR(20) NOT NULL DEFAULT 'approved',
        IsDeleted BIT NOT NULL DEFAULT 0,
        CreatedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
        UpdatedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
        CONSTRAINT fk_observer_examcentre FOREIGN KEY (ExamCentreRefId)
            REFERENCES EXAMCENTRE.ExamCentre(Id) ON DELETE CASCADE
    );

    CREATE INDEX idx_observer_centre_ref ON EXAMCENTRE.ExamCentreObserver(ExamCentreRefId);
    CREATE INDEX idx_observer_centre_code ON EXAMCENTRE.ExamCentreObserver(ExamCentreCode);
END
GO

-- =======================================================================
-- 5. Table: EXAMCENTRE.ExamCentreStudentAllocation
-- =======================================================================
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'ExamCentreStudentAllocation' AND schema_id = SCHEMA_ID('EXAMCENTRE'))
BEGIN
    CREATE TABLE EXAMCENTRE.ExamCentreStudentAllocation (
        Id INT IDENTITY(1,1) PRIMARY KEY,
        ExamCentreRefId INT NOT NULL,
        ExamCentreCode VARCHAR(20) NOT NULL,
        ClassLabel NVARCHAR(50) NOT NULL, -- '8', '9', '10', 'XI & XII', 'Senior College'
        Urdu NVARCHAR(20) NOT NULL DEFAULT '0',
        Hindi NVARCHAR(20) NOT NULL DEFAULT '0',
        English NVARCHAR(20) NOT NULL DEFAULT '0',
        Gujarati NVARCHAR(20) NOT NULL DEFAULT '0',
        Bengali NVARCHAR(20) NOT NULL DEFAULT '0',
        Total INT NOT NULL DEFAULT 0,
        CreatedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
        CONSTRAINT fk_allocation_examcentre FOREIGN KEY (ExamCentreRefId)
            REFERENCES EXAMCENTRE.ExamCentre(Id) ON DELETE CASCADE
    );

    CREATE INDEX idx_allocation_centre_code ON EXAMCENTRE.ExamCentreStudentAllocation(ExamCentreCode);
END
GO

-- =======================================================================
-- 6. Table: EXAMCENTRE.ExamCentreAttendanceSummary
-- =======================================================================
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'ExamCentreAttendanceSummary' AND schema_id = SCHEMA_ID('EXAMCENTRE'))
BEGIN
    CREATE TABLE EXAMCENTRE.ExamCentreAttendanceSummary (
        Id INT IDENTITY(1,1) PRIMARY KEY,
        ExamCentreRefId INT NULL,
        ExamCentreCode VARCHAR(20) NOT NULL,
        ClassLabel NVARCHAR(50) NOT NULL, -- '8', '9', '10', 'JR', 'SR'
        Allocated INT NOT NULL DEFAULT 0,
        Present INT NOT NULL DEFAULT 0,
        Absent INT NOT NULL DEFAULT 0,
        SubmittedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
        SubmittedBy NVARCHAR(150) NULL
    );

    CREATE INDEX idx_attendance_centre_code ON EXAMCENTRE.ExamCentreAttendanceSummary(ExamCentreCode);
END
GO

-- =======================================================================
-- 7. INITIAL SEED DATA
-- =======================================================================

-- 7.1 Seed ExamCentre: Titan School
IF NOT EXISTS (SELECT 1 FROM EXAMCENTRE.ExamCentre WHERE ExamCentreCode = 'AMPNTS25TG0644')
BEGIN
    INSERT INTO EXAMCENTRE.ExamCentre (
        ExamCentreId,
        ExamCentreCode,
        CentreName,
        InstitutionName,
        Address,
        DistrictName,
        StateName,
        Pincode,
        ContactPerson,
        ContactPhone,
        ContactEmail,
        Capacity,
        ApprovedCapacity,
        Registered,
        Status
    )
    VALUES (
        'EC-TG-0644',
        'AMPNTS25TG0644',
        'Titan School',
        'Titan Educational Society',
        'H.No. 8-3-167/60/11&11A, Indira Nagar, Borabanda',
        'Hyderabad',
        'Telangana',
        '500005',
        'Afsari Begum',
        '9390638371',
        'titan.school@ampindia.org',
        200,
        200,
        183,
        'active'
    );
END

-- 7.2 Seed ExamCentre: Anjuman-I-Islam High School
IF NOT EXISTS (SELECT 1 FROM EXAMCENTRE.ExamCentre WHERE ExamCentreCode = 'AMPNTS25MH0122')
BEGIN
    INSERT INTO EXAMCENTRE.ExamCentre (
        ExamCentreId,
        ExamCentreCode,
        CentreName,
        InstitutionName,
        Address,
        DistrictName,
        StateName,
        Pincode,
        ContactPerson,
        ContactPhone,
        ContactEmail,
        Capacity,
        ApprovedCapacity,
        Registered,
        Status
    )
    VALUES (
        'EC-MH-0122',
        'AMPNTS25MH0122',
        'Anjuman-I-Islam High School',
        'Anjuman-I-Islam Trust',
        '92, Dr. D.N. Road, Opp. CST Railway Station',
        'Mumbai',
        'Maharashtra',
        '400001',
        'Farhan Qureshi',
        '9820123456',
        'anjuman.cst@ampindia.org',
        300,
        300,
        245,
        'active'
    );
END
GO

-- 7.3 Seed Observers for Titan School
DECLARE @TitanCentreId INT = (SELECT Id FROM EXAMCENTRE.ExamCentre WHERE ExamCentreCode = 'AMPNTS25TG0644');

IF @TitanCentreId IS NOT NULL AND NOT EXISTS (SELECT 1 FROM EXAMCENTRE.ExamCentreObserver WHERE ExamCentreCode = 'AMPNTS25TG0644')
BEGIN
    INSERT INTO EXAMCENTRE.ExamCentreObserver (ExamCentreRefId, ExamCentreCode, ObserverTypeId, ObserverTypeName, Name, Mobile, Designation) VALUES
    (@TitanCentreId, 'AMPNTS25TG0644', 1, 'AMP Observer', 'Asifa Begum', '8309940165', 'Senior Academic Coordinator'),
    (@TitanCentreId, 'AMPNTS25TG0644', 2, 'Exam Centre Observer', 'Mohammed Basid', '9700707764', 'Vice Principal'),
    (@TitanCentreId, 'AMPNTS25TG0644', 1, 'AMP Observer', 'Kouser Sultana', '9989347226', 'District Chapter Lead');
END
GO

-- 7.4 Seed Student Allocations for Titan School
DECLARE @TitanCentreId2 INT = (SELECT Id FROM EXAMCENTRE.ExamCentre WHERE ExamCentreCode = 'AMPNTS25TG0644');

IF @TitanCentreId2 IS NOT NULL AND NOT EXISTS (SELECT 1 FROM EXAMCENTRE.ExamCentreStudentAllocation WHERE ExamCentreCode = 'AMPNTS25TG0644')
BEGIN
    INSERT INTO EXAMCENTRE.ExamCentreStudentAllocation (ExamCentreRefId, ExamCentreCode, ClassLabel, Urdu, Hindi, English, Gujarati, Bengali, Total) VALUES
    (@TitanCentreId2, 'AMPNTS25TG0644', '8', '0', '3', '24', '0', '0', 27),
    (@TitanCentreId2, 'AMPNTS25TG0644', '9', '0', '0', '56', '0', '0', 56),
    (@TitanCentreId2, 'AMPNTS25TG0644', '10', '0', '0', '48', '0', '0', 48),
    (@TitanCentreId2, 'AMPNTS25TG0644', 'XI & XII', '0', '0', '49', '0', '0', 49),
    (@TitanCentreId2, 'AMPNTS25TG0644', 'Senior College', '0', '-', '3', '-', '-', 3);
END
GO

-- =======================================================================
-- 8. T-SQL STORED PROCEDURES (Namespace: EXAMCENTRE)
-- =======================================================================

-- Procedure: Get Dashboard Data for Exam Centre
CREATE OR ALTER PROCEDURE EXAMCENTRE.sp_ExamCentre_GetDashboard
    @ExamCentreCode VARCHAR(20)
AS
BEGIN
    SET NOCOUNT ON;

    -- Result Set 1: Exam Centre Master Record
    SELECT 
        Id,
        ExamCentreId,
        ExamCentreCode,
        CentreName,
        InstitutionName,
        Address,
        DistrictId,
        DistrictName,
        MandalId,
        MandalName,
        StateId,
        StateName,
        Pincode,
        ContactPerson,
        ContactPhone,
        ContactEmail,
        GoogleMapLink,
        Capacity,
        ApprovedCapacity,
        Registered,
        Status,
        CreatedAt,
        UpdatedAt
    FROM EXAMCENTRE.ExamCentre
    WHERE ExamCentreCode = @ExamCentreCode
      AND IsDeleted = 0;

    -- Result Set 2: Observers
    SELECT 
        Id,
        ExamCentreRefId,
        ExamCentreCode,
        ObserverTypeId,
        ObserverTypeName,
        Name,
        Mobile,
        Email,
        Designation,
        OrganizationName,
        Status,
        CreatedAt,
        UpdatedAt
    FROM EXAMCENTRE.ExamCentreObserver
    WHERE ExamCentreCode = @ExamCentreCode
      AND IsDeleted = 0
    ORDER BY Id ASC;

    -- Result Set 3: Student Allocations
    SELECT 
        Id,
        ExamCentreRefId,
        ExamCentreCode,
        ClassLabel,
        Urdu,
        Hindi,
        English,
        Gujarati,
        Bengali,
        Total,
        CreatedAt
    FROM EXAMCENTRE.ExamCentreStudentAllocation
    WHERE ExamCentreCode = @ExamCentreCode
    ORDER BY Id ASC;
END;
GO

-- Procedure: Submit Attendance Summary
CREATE OR ALTER PROCEDURE EXAMCENTRE.sp_ExamCentre_SubmitAttendanceSummary
    @ExamCentreCode VARCHAR(20),
    @ClassLabel NVARCHAR(50),
    @Allocated INT,
    @Present INT,
    @Absent INT,
    @SubmittedBy NVARCHAR(150) = NULL
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @ExamCentreRefId INT = (
        SELECT TOP 1 Id 
        FROM EXAMCENTRE.ExamCentre 
        WHERE ExamCentreCode = @ExamCentreCode
    );

    INSERT INTO EXAMCENTRE.ExamCentreAttendanceSummary (
        ExamCentreRefId,
        ExamCentreCode,
        ClassLabel,
        Allocated,
        Present,
        Absent,
        SubmittedAt,
        SubmittedBy
    )
    VALUES (
        @ExamCentreRefId,
        @ExamCentreCode,
        @ClassLabel,
        @Allocated,
        @Present,
        @Absent,
        GETDATE(),
        @SubmittedBy
    );

    SELECT SCOPE_IDENTITY() AS InsertedId;
END;
GO

-- =======================================================================
-- 9. Table: EXAMCENTRE.ExamCentreStudentAttendance (Web Attendance Roster)
-- =======================================================================
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'ExamCentreStudentAttendance' AND schema_id = SCHEMA_ID('EXAMCENTRE'))
BEGIN
    CREATE TABLE EXAMCENTRE.ExamCentreStudentAttendance (
        Id INT IDENTITY(1,1) PRIMARY KEY,
        ExamCentreCode VARCHAR(20) NOT NULL,
        ClassLabel NVARCHAR(50) NOT NULL,
        RollNumber NVARCHAR(50) NOT NULL,
        StudentName NVARCHAR(150) NOT NULL,
        Gender NVARCHAR(20) NULL,
        Medium NVARCHAR(50) NULL,
        IsPresent BIT NOT NULL DEFAULT 1, -- 1 = Present, 0 = Absent
        MarkedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
        MarkedBy NVARCHAR(150) NULL
    );

    CREATE INDEX idx_student_attendance_lookup 
        ON EXAMCENTRE.ExamCentreStudentAttendance(ExamCentreCode, ClassLabel);
END
GO

-- 9.1 Seed Sample Students for Titan School (Class 8)
IF NOT EXISTS (SELECT 1 FROM EXAMCENTRE.ExamCentreStudentAttendance WHERE ExamCentreCode = 'AMPNTS25TG0644' AND ClassLabel = '8')
BEGIN
    INSERT INTO EXAMCENTRE.ExamCentreStudentAttendance (ExamCentreCode, ClassLabel, RollNumber, StudentName, Gender, Medium, IsPresent) VALUES
    ('AMPNTS25TG0644', '8', 'AMP26-TG0644-0801', 'Ayaan Mohammed Khan', 'Male', 'English', 1),
    ('AMPNTS25TG0644', '8', 'AMP26-TG0644-0802', 'Fatima Zahra', 'Female', 'English', 1),
    ('AMPNTS25TG0644', '8', 'AMP26-TG0644-0803', 'Zaid Abdullah', 'Male', 'Hindi', 1),
    ('AMPNTS25TG0644', '8', 'AMP26-TG0644-0804', 'Mariam Siddiqui', 'Female', 'English', 0),
    ('AMPNTS25TG0644', '8', 'AMP26-TG0644-0805', 'Syed Umar Farooq', 'Male', 'English', 1),
    ('AMPNTS25TG0644', '8', 'AMP26-TG0644-0806', 'Ayesha Nooreen', 'Female', 'Hindi', 1),
    ('AMPNTS25TG0644', '8', 'AMP26-TG0644-0807', 'Bilal Ahmed', 'Male', 'English', 1),
    ('AMPNTS25TG0644', '8', 'AMP26-TG0644-0808', 'Sana Begum', 'Female', 'English', 1),
    ('AMPNTS25TG0644', '8', 'AMP26-TG0644-0809', 'Hamza Qureshi', 'Male', 'Hindi', 0),
    ('AMPNTS25TG0644', '8', 'AMP26-TG0644-0810', 'Zainab Parveen', 'Female', 'English', 1);
END
GO

-- Procedure: Get Students For Web Attendance Roster
CREATE OR ALTER PROCEDURE EXAMCENTRE.sp_ExamCentre_GetStudentsForAttendance
    @ExamCentreCode VARCHAR(20),
    @ClassLabel NVARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
        Id,
        ExamCentreCode,
        ClassLabel,
        RollNumber,
        StudentName,
        Gender,
        Medium,
        IsPresent,
        MarkedAt,
        MarkedBy
    FROM EXAMCENTRE.ExamCentreStudentAttendance
    WHERE ExamCentreCode = @ExamCentreCode
      AND ClassLabel = @ClassLabel
    ORDER BY RollNumber ASC;
END;
GO

-- Procedure: Save Student Attendance
CREATE OR ALTER PROCEDURE EXAMCENTRE.sp_ExamCentre_SaveStudentAttendance
    @Id INT,
    @IsPresent BIT,
    @MarkedBy NVARCHAR(150) = NULL
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE EXAMCENTRE.ExamCentreStudentAttendance
    SET IsPresent = @IsPresent,
        MarkedAt = GETDATE(),
        MarkedBy = @MarkedBy
    WHERE Id = @Id;
END;
GO


DROP DATABASE IF EXISTS expenses_db;
CREATE DATABASE expenses_db;

/c expenses_db;

-- table for login
CREATE TABLE dbo.[User]
(
    UserID INT IDENTITY(1,1) NOT NULL,
    LoginName NVARCHAR(40) NOT NULL,
    PasswordHash BINARY(64) NOT NULL,
    FirstName NVARCHAR(40) NULL,
    LastName NVARCHAR(40) NULL,
    CONSTRAINT [PK_User_UserID] PRIMARY KEY CLUSTERED (UserID ASC)
)

CREATE TABLE transactions (
    transactions_id INTEGER PRIMARY KEY,
    transactions_name VARCHAR (255)
    transactions_cost VARCHAR (255)
);

-- supposed to be able to select the expense types from seeds.sql
CREATE TABLE expense_types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

-- table to update dates/times
CREATE TABLE dbo.YourTable
(  
    DateId INT PRIMARY KEY CLUSTERED,   
    DateName VARCHAR(50) NOT NULL,
    modstamp DATETIME2 GENERATED ALWAYS AS ROW START NOT NULL,   
    MaxDateTime2 DATETIME2 GENERATED ALWAYS AS ROW END HIDDEN NOT NULL,     
    PERIOD FOR SYSTEM_TIME (modstamp,MaxDateTime2)    
)

INSERT INTO dbo.YourTable (DooId, DooName)
VALUES      (1,'abc');

SELECT *
FROM   dbo.YourTable;

WAITFOR DELAY '00:00:05'

UPDATE dbo.YourTable
SET    DateName = 'xyz'
WHERE  DateId = 1;

SELECT *
FROM   dbo.YourTable;

DROP TABLE dbo.YourTable; 
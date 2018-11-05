-- Users table
CREATE TABLE [dbo].[Tennants]
(
	[ID]		INT IDENTITY (1,1)	NOT NULL,
	[FirstName]	NVARCHAR(20)		NOT NULL,
	[LastName]	NVARCHAR(20)		NOT NULL,
	[Phone]		NVARCHAR(12)		NOT NULL,
	[Apartment]	NVARCHAR(20)		NOT NULL,
	[UnitNum]	INT					NOT NULL,
	[Explain]	NVARCHAR(1000)		NOT NULL,
	[Timestamps] DATETIME			NOT NULL

	CONSTRAINT [PK_dbo.Tennants] PRIMARY KEY CLUSTERED ([ID] ASC)
);

INSERT INTO [dbo].[Tennants] (FirstName, LastName, Phone, Apartment, UnitNum, Explain, Timestamps) VALUES
	('Jim','Johnson','541-555-5555','A','1','Washing Machine Broke','2000-10-31 12:11:11'),
	('Sue','Suzanne','541-555-5555','B','2','Cooking Machine Broke','2001-10-31 12:11:11'),
	('Mira','Kuzak','541-555-5555','C','3','Stove Machine Broke','2002-10-31 12:11:11'),
	('Juan','Nowell','541-555-5555','D','4','Ceiling Machine Broke','2003-10-31 12:11:11'),
	('Naomi','Jones','541-555-5555','E','5','Fridge Machine Broke','2004-10-31 12:11:11')
GO
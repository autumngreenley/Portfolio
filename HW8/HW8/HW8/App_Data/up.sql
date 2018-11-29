CREATE TABLE [dbo].[Buyer]
(
    ID			INT IDENTITY (1,1) NOT NULL,
    Name		NVARCHAR(100) NOT NULL,

    CONSTRAINT [PK_dbo.Buyer] PRIMARY KEY CLUSTERED (ID)
);

CREATE TABLE [dbo].[Seller]
(
    ID			INT IDENTITY (1,1) NOT NULL,
    Name		NVARCHAR(100) NOT NULL,

    CONSTRAINT [PK_dbo.Seller] PRIMARY KEY CLUSTERED (ID)
);

CREATE TABLE [dbo].[Item]
(
    ID			INT IDENTITY (1,1) NOT NULL,
    Name		NVARCHAR(100) NOT NULL,
	Description	NVARCHAR(500) NOT NULL,
	SellerID	INT NOT NULL,

    CONSTRAINT [PK_dbo.Item] PRIMARY KEY CLUSTERED (ID),
	CONSTRAINT [FK_dbo.Item] FOREIGN KEY (SellerID) REFERENCES [dbo].[Seller] (ID)
);

CREATE TABLE [dbo].[Bid]
(
    ID			INT IDENTITY (1,1) NOT NULL,
    BuyerID		INT NOT NULL,
	ItemID		INT NOT NULL,
	Timestamp	DATETIME NOT NULL,
	Price		FLOAT NOT NULL,

    CONSTRAINT [PK_dbo.Bid] PRIMARY KEY CLUSTERED (ID),
	CONSTRAINT [FK_dbo.Bid] FOREIGN KEY (BuyerID) REFERENCES [dbo].[Buyer] (ID),
	CONSTRAINT [FK2_dbo.Bid] FOREIGN KEY (ItemID) REFERENCES [dbo].[Item] (ID)
);


INSERT INTO [dbo].[Buyer] (Name) VALUES
('Jane Stone'),
('Tom McMasters'),
('Otto Vanderwall');

INSERT INTO [dbo].[Seller] (Name) VALUES
('Gayle Hardy'),
('Lyle Banks'),
('Pearl Greene');

INSERT INTO [dbo].[Item] (Name,Description,SellerID) VALUES
('Abraham Lincoln Hammer'    ,'A bench mallet fashioned from a broken rail-splitting maul in 1829 and owned by Abraham Lincoln',1),
('Albert Einsteins Telescope','A brass telescope owned by Albert Einstein in Germany, circa 1927',2),
('Bob Dylan Love Poems'      ,'Five versions of an original unpublished, handwritten, love poem by Bob Dylan',3);

INSERT INTO [dbo].[Bid] (ItemID,BuyerID, Price,Timestamp) VALUES
(1,1,250000,'12/04/2017 09:04:22'),
(2,2,95000 ,'12/04/2017 08:44:03');

GO
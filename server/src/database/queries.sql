-- Create the Users table
CREATE TABLE Users (
    ID INT IDENTITY(1, 1) PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    ProfilePicture VARCHAR(255),
    -- Add other columns as needed
);

-- Insert 10 sample records into the Users table
INSERT INTO Users (Username, Password, Email)
VALUES
    ('user1', 'password1', 'user1@example.com'),
    ('user2', 'password2', 'user2@example.com'),
    ('user3', 'password3', 'user3@example.com'),
    ('user4', 'password4', 'user4@example.com'),
    ('user5', 'password5', 'user5@example.com'),
    ('user6', 'password6', 'user6@example.com'),
    ('user7', 'password7', 'user7@example.com'),
    ('user8', 'password8', 'user8@example.com'),
    ('user9', 'password9', 'user9@example.com'),
    ('user10', 'password10', 'user10@example.com');

-- Create the Posts table
CREATE TABLE Posts (
    ID INT IDENTITY(1, 1) PRIMARY KEY,
    UserID INT NOT NULL,
    Content VARCHAR(255) NOT NULL,
    Timestamp DATETIME NOT NULL,
    -- Add other columns as needed
);

-- Insert 10 sample records into the Posts table
DECLARE @UserID INT;
SET @UserID = 1; -- Starting user ID

INSERT INTO Posts (UserID, Content, Timestamp)
VALUES
    (@UserID, 'Sample post 1', GETDATE()),
    (@UserID, 'Sample post 2', GETDATE()),
    (@UserID, 'Sample post 3', GETDATE()),
    (@UserID, 'Sample post 4', GETDATE()),
    (@UserID, 'Sample post 5', GETDATE()),
    (@UserID, 'Sample post 6', GETDATE()),
    (@UserID, 'Sample post 7', GETDATE()),
    (@UserID, 'Sample post 8', GETDATE()),
    (@UserID, 'Sample post 9', GETDATE()),
    (@UserID, 'Sample post 10', GETDATE());

-- Repeat the above two INSERT statements for each user ID to create 10 posts for each user

-- Create the Comments table
CREATE TABLE Comments (
    ID INT IDENTITY(1, 1) PRIMARY KEY,
    PostID INT NOT NULL,
    UserID INT NOT NULL,
    CommentText VARCHAR(255) NOT NULL,
    Timestamp DATETIME NOT NULL,
    -- Add other columns as needed
);

-- Insert 10 sample records into the Comments table
DECLARE @PostID INT;
SET @PostID = 1; -- Starting post ID

INSERT INTO Comments (PostID, UserID, CommentText, Timestamp)
VALUES
    (@PostID, @UserID, 'Sample comment 1', GETDATE()),
    (@PostID, @UserID, 'Sample comment 2', GETDATE()),
    (@PostID, @UserID, 'Sample comment 3', GETDATE()),
    (@PostID, @UserID, 'Sample comment 4', GETDATE()),
    (@PostID, @UserID, 'Sample comment 5', GETDATE()),
    (@PostID, @UserID, 'Sample comment 6', GETDATE()),
    (@PostID, @UserID, 'Sample comment 7', GETDATE()),
    (@PostID, @UserID, 'Sample comment 8', GETDATE()),
    (@PostID, @UserID, 'Sample comment 9', GETDATE()),
    (@PostID, @UserID, 'Sample comment 10', GETDATE());

-- Repeat the above two INSERT statements for each post ID to create 10 comments for each post

-- Create the Likes table
CREATE TABLE Likes (
    ID INT IDENTITY(1, 1) PRIMARY KEY,
    UserID INT NOT NULL,
    PostID INT,
    CommentID INT,
    Timestamp DATETIME NOT NULL,
    -- Add other columns as needed
);

-- Insert 10 sample records into the Likes table
SET @PostID = 1; -- Reset post ID for likes

INSERT INTO Likes (UserID, PostID, CommentID, Timestamp)
VALUES
    (@UserID, @PostID, NULL, GETDATE()),
    (@UserID, @PostID, NULL, GETDATE()),
    (@UserID, @PostID, NULL, GETDATE()),
    (@UserID, @PostID, NULL, GETDATE()),
    (@UserID, @PostID, NULL, GETDATE()),
    (@UserID, @PostID, NULL, GETDATE()),
    (@UserID, @PostID, NULL, GETDATE()),
    (@UserID, @PostID, NULL, GETDATE()),
    (@UserID, @PostID, NULL, GETDATE()),
    (@UserID, @PostID, NULL, GETDATE());

-- Repeat the above INSERT statement for each post ID and comment ID to create 10 likes for each post and comment

-- Create the Shares table
CREATE TABLE Shares (
    ID INT IDENTITY(1, 1) PRIMARY KEY,
    UserID INT NOT NULL,
    PostID INT,
    Timestamp DATETIME NOT NULL,
    -- Add other columns as needed
);

-- Insert 10 sample records into the Shares table
SET @PostID = 1; -- Reset post ID for shares

INSERT INTO Shares (UserID, PostID, Timestamp)
VALUES
    (@UserID, @PostID, GETDATE()),
    (@UserID, @PostID, GETDATE()),
    (@UserID, @PostID, GETDATE()),
    (@UserID, @PostID, GETDATE()),
    (@UserID, @PostID, GETDATE()),
    (@UserID, @PostID, GETDATE()),
    (@UserID, @PostID, GETDATE()),
    (@UserID, @PostID, GETDATE()),
    (@UserID, @PostID, GETDATE()),
    (@UserID, @PostID, GETDATE());

-- Repeat the above INSERT statement for each post ID to create 10 shares for each post

-- Create the Friends table
CREATE TABLE Friends (
    ID INT IDENTITY(1, 1) PRIMARY KEY,
    UserID1 INT NOT NULL,
    UserID2 INT NOT NULL,
    RequestStatus VARCHAR(50) NOT NULL,
    -- Add other columns as needed
);

-- Insert 10 sample records into the Friends table
SET @UserID = 1; -- Reset user ID for friends

INSERT INTO Friends (UserID1, UserID2, RequestStatus)
VALUES
    (@UserID, 2, 'Accepted'),
    (@UserID, 3, 'Accepted'),
    (@UserID, 4, 'Accepted'),
    (@UserID, 5, 'Accepted'),
    (@UserID, 6, 'Accepted'),
    (@UserID, 7, 'Accepted'),
    (@UserID, 8, 'Accepted'),
    (@UserID, 9, 'Accepted'),
    (@UserID, 10, 'Accepted'),
    (2, @UserID, 'Accepted');

-- Repeat the above INSERT statement for each user ID to create 10 friend connections for each user

-- Create the Notifications table
CREATE TABLE Notifications (
    ID INT IDENTITY(1, 1) PRIMARY KEY,
    UserID INT NOT NULL,
    NotificationType VARCHAR(50) NOT NULL,
    SourceID INT,
    Timestamp DATETIME NOT NULL,
    -- Add other columns as needed
);

-- Insert 10 sample records into the Notifications table
SET @UserID = 1; -- Reset user ID for notifications

INSERT INTO Notifications (UserID, NotificationType, SourceID, Timestamp)
VALUES
    (@UserID, 'FriendRequest', 2, GETDATE()),
    (@UserID, 'FriendRequest', 3, GETDATE()),
    (@UserID, 'FriendRequest', 4, GETDATE()),
    (@UserID, 'FriendRequest', 5, GETDATE()),
    (@UserID, 'FriendRequest', 6, GETDATE()),
    (@UserID, 'FriendRequest', 7, GETDATE()),
    (@UserID, 'FriendRequest', 8, GETDATE()),
    (@UserID, 'FriendRequest', 9, GETDATE()),
    (@UserID, 'FriendRequest', 10, GETDATE()),
    (@UserID, 'Like', 1, GETDATE());

-- Repeat the above INSERT statement for each user ID and notification type to create 10 notifications for each user

-- Create the Messages table
CREATE TABLE Messages (
    ID INT IDENTITY(1, 1) PRIMARY KEY,
    SenderID INT NOT NULL,
    RecipientID INT NOT NULL,
    MessageContent VARCHAR(MAX) NOT NULL,
    Timestamp DATETIME NOT NULL,
    -- Add other columns as needed
);

-- Insert 10 sample records into the Messages table
SET @UserID = 1; -- Reset user ID for messages

INSERT INTO Messages (SenderID, RecipientID, MessageContent, Timestamp)
VALUES
    (@UserID, 2, 'Sample message 1', GETDATE()),
    (@UserID, 2, 'Sample message 2', GETDATE()),
    (@UserID, 3, 'Sample message 3', GETDATE()),
    (@UserID, 3, 'Sample message 4', GETDATE()),
    (@UserID, 4, 'Sample message 5', GETDATE()),
    (@UserID, 4, 'Sample message 6', GETDATE()),
    (@UserID, 5, 'Sample message 7', GETDATE()),
    (@UserID, 5, 'Sample message 8', GETDATE()),
    (@UserID, 6, 'Sample message 9', GETDATE()),
    (@UserID, 6, 'Sample message 10', GETDATE());
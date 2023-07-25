CREATE DATABASE connectify

-- Create the Users table
CREATE TABLE users (
    userID INT IDENTITY(1, 1) PRIMARY KEY,
    userName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    profileUrl VARCHAR(255)
);
select  * from users
-- Create the Posts table
DROP TABLE posts
CREATE TABLE posts (
    postID INT IDENTITY(1, 1) PRIMARY KEY,
    userID INT NOT NULL,
    content VARCHAR(255) NOT NULL,
    imgUrl VARCHAR(255) DEFAULT NULL,
    timestamp DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (userID) REFERENCES users(userID)
);

ALTER TABLE posts
ADD timestamp DEFAULT GETDATE()
-- Add a default constraint to an existing column
ALTER TABLE posts
ADD CONSTRAINT c_post DEFAULT GETDATE() FOR timestamp;

-- Create the Comments table
CREATE TABLE comments (
    commentID INT IDENTITY(1, 1) PRIMARY KEY,
    postID INT NOT NULL,
    userID INT NOT NULL,
    commentText VARCHAR(255) NOT NULL,
    timestamp DATETIME NOT NULL,
    FOREIGN KEY (postID) REFERENCES posts(postID),
    FOREIGN KEY (userID) REFERENCES users(userID)
);
select * from comments
-- Create the Likes table
CREATE TABLE likes (
    likeID INT IDENTITY(1, 1) PRIMARY KEY,
    userID INT NOT NULL,
    postID INT,
    commentID INT,
    timestamp DATETIME NOT NULL,
    FOREIGN KEY (userID) REFERENCES users(userID),
    FOREIGN KEY (postID) REFERENCES posts(postID),
    FOREIGN KEY (commentID) REFERENCES comments(commentID)
);
select * from likes
-- Create the Shares table
CREATE TABLE shares (
    shareID INT IDENTITY(1, 1) PRIMARY KEY,
    userID INT NOT NULL,
    postID INT,
    timestamp DATETIME NOT NULL,
    FOREIGN KEY (userID) REFERENCES users(userID),
    FOREIGN KEY (postID) REFERENCES posts(postID)
);

DROP TABLE friends
-- Create the Friends table
CREATE TABLE friends (
    friendID INT IDENTITY(1, 1) PRIMARY KEY,
    userID1 INT NOT NULL,
    userID2 INT NOT NULL,
    requestStatus VARCHAR(50) NOT NULL,
    FOREIGN KEY (userID1) REFERENCES users(userID),
    FOREIGN KEY (userID2) REFERENCES users(userID)
);

-- Create the Notifications table
CREATE TABLE notifications (
    notificationID INT IDENTITY(1, 1) PRIMARY KEY,
    userID INT NOT NULL,
    notificationType VARCHAR(50) NOT NULL,
    targetID INT,
    timestamp DATETIME NOT NULL,
    FOREIGN KEY (userID) REFERENCES users(userID)
);

-- Create the Messages table
CREATE TABLE messages (
    messageID INT IDENTITY(1, 1) PRIMARY KEY,
    senderID INT NOT NULL,
    recipientID INT NOT NULL,
    messageContent VARCHAR(MAX) NOT NULL,
    timestamp DATETIME NOT NULL,
    FOREIGN KEY (senderID) REFERENCES users(userID),
    FOREIGN KEY (recipientID) REFERENCES users(userID)
);

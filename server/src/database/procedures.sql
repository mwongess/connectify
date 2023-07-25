-- AUTH
-- SAVE USER
CREATE PROCEDURE SaveUser
    @userName VARCHAR(255),
    @password VARCHAR(255),
    @email VARCHAR(255)
AS
BEGIN
    INSERT INTO Users
        (username, password, email)
    VALUES
        (@userName, @password, @email);
END;
-- DROP PROCEDURE SaveUser;
-- 
-- GET ONE USER
CREATE PROCEDURE GetUser
    @userName VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM users
    WHERE userName = @UserName;
END;

CREATE PROCEDURE GetUserByID
    @userID INT
AS
BEGIN
    SELECT *
    FROM users
    WHERE userID = @userID;
END;
-- 
-- POSTS
-- GET POSTS MADE BY A USER
CREATE PROCEDURE GetUserPosts
    @userID INT
AS
BEGIN
    SELECT p.postID, p.content, p.timestamp
    FROM posts p
    WHERE P.userID = @userID;
END;
-- 
-- GET POSTS FROM FRIENDS
DROP PROCEDURE IF EXISTS GetConnectedUserPosts;

CREATE PROCEDURE GetConnectedUserPosts
    @userID INT
AS
BEGIN
    SELECT
        u.userID,
        u.userName,
        u.email,
        u.profileUrl,
        p.postID,
        p.content,
        p.imgUrl,
        p.timestamp
    FROM friends f
    INNER JOIN users u ON f.userID2 = u.userID
    INNER JOIN posts p ON u.userID = p.userID
    WHERE f.userID1 = @userID AND f.requestStatus = 'Accepted'

    UNION

    SELECT
        u.userID,
        u.userName,
        u.email,
        u.profileUrl,
        p.postID,
        p.content,
        p.imgUrl,
        p.timestamp 
    FROM users u
    INNER JOIN posts p ON u.userID = p.userID
    WHERE u.userID = @userID;
END;




-- 
-- SAVE A POST
DROP PROCEDURE SavePost
CREATE PROCEDURE SavePost
    @userID INT,
    @content VARCHAR(255),
    @imgUrl VARCHAR(255)
AS
BEGIN
    INSERT INTO Posts
        (userID, content, imgUrl)
    VALUES
        (@userID, @content, @imgUrl);
END;
-- 
-- GET A SINGLE POST
CREATE PROCEDURE GetPost
    @postID INT
AS
BEGIN
    SELECT *
    FROM posts
    WHERE postID = @postID;
END;
-- DELETE A POST
CREATE PROCEDURE DeletePost
    @postID INT
AS
BEGIN
    DELETE FROM posts
    WHERE postID = @postID;
END;

-- 
-- FRIENDS
CREATE PROCEDURE GetUserFriends
    @userID INT
AS
BEGIN
    SELECT u.userName, u.email
    FROM users u
        INNER JOIN friends f ON u.userID = f.userID2
    WHERE f.userID1 = @userID AND f.requestStatus = 'Accepted';
END;
-- 
-- SAVE A FRIEND
CREATE PROCEDURE SaveFriend
    @userID1 INT,
    @userID2 INT,
    @requestStatus VARCHAR(50)
AS
BEGIN
    INSERT INTO friends
        (userID1, userID2, requestStatus)
    VALUES
        (@userID1, @userID2, @requestStatus);
END;
-- 
-- DELETE FRIEND
CREATE PROCEDURE DeleteFriend
    @friendID INT
AS
BEGIN
    DELETE FROM friends
        WHERE friendID = @friendID;
END;
-- Check if following
CREATE PROCEDURE CheckIfFollowing
    @userID1 INT,
    @userID2 INT
AS
BEGIN
    DECLARE @isFollowing BIT;

    SELECT @isFollowing = CASE WHEN EXISTS (
        SELECT 1
        FROM friends
        WHERE (userID1 = @userID1 AND userID2 = @userID2)
            OR (userID1 = @userID2 AND userID2 = @userID1)
            AND requestStatus = 'Accepted'
    ) THEN 1 ELSE 0 END;

    SELECT @isFollowing AS IsFollowing;
END;
-- DELETE FRIENDSHIP
CREATE PROCEDURE DeleteFriendship
    @userID1 INT,
    @userID2 INT
AS
BEGIN
    DELETE FROM friends
    WHERE
        (userID1 = @userID1 AND userID2 = @userID2)
        OR
        (userID1 = @userID2 AND userID2 = @userID1);
END;

-- CHECK IF FRIENDSHIP EXISTS
CREATE PROCEDURE CheckFriendshipExists
    @userID1 INT,
    @userID2 INT
AS
BEGIN
    DECLARE @friendshipExists BIT;

    SELECT @friendshipExists = CASE WHEN EXISTS (
        SELECT 1
        FROM friends
        WHERE
            (userID1 = @userID1 AND userID2 = @userID2)
            OR
            (userID1 = @userID2 AND userID2 = @userID1)
    ) THEN 1 ELSE 0 END;

    SELECT @friendshipExists AS FriendshipExists;
END;


-- 
-- COMMENTS
-- GET ALL COMMENTS
DROP PROCEDURE GetPostComments
CREATE PROCEDURE GetPostComments
    @postID INT
AS
BEGIN
    SELECT c.commentID, c.commentText, c.timestamp
    FROM comments c
    WHERE c.postID = @postID;
END;
-- 
--  GET ONE COMMENT
CREATE PROCEDURE GetComment
    @commentID INT
AS
BEGIN
    SELECT *
    FROM comments
    WHERE commentID = @commentID;
END;
-- 
-- SAVE A POST COMMENT
DROP PROCEDURE SaveComment
CREATE PROCEDURE SaveComment
    @postID INT,
    @userID INT,
    @commentText VARCHAR(255)
AS
BEGIN
    INSERT INTO comments
        (postID, userID, commentText, timestamp)
    VALUES
        (@postID, @userID, @commentText, GETDATE());
END;
-- 
-- DELETE COMMENT
CREATE PROCEDURE DeleteComment
    @commentID INT
AS
BEGIN
    DELETE FROM comments
        WHERE commentID= @commentID;
END;
-- 
-- NOTIFICATIONS
-- GET ALL NOTIFICATIONS
CREATE PROCEDURE GetUserNotifications
    @userID INT
AS
BEGIN
    SELECT n.notificationID, n.notificationType, n.timestamp
    FROM notifications n
    WHERE n.userID = @userID;
END;
-- 
-- SAVE NOTIFICATION
CREATE PROCEDURE SaveNotification
    @userID INT,
    @notificationType VARCHAR(50),
    @targetID INT,
    @timestamp DATETIME
AS
BEGIN
    INSERT INTO notifications
        (userID, notificationType, targetID, timestamp)
    VALUES
        (@userID, @notificationType, @targetID, @timestamp);
END;
-- 
-- DELETE NOTIFICATION
CREATE PROCEDURE DeleteNotification
    @notificationID INT
AS
BEGIN
    DELETE FROM notifications
        WHERE notificationID = @notificationID;
END;
-- 
-- MESSAGES
-- GET ALL MESSAGES
DROP PROCEDURE GetUserMessages
CREATE PROCEDURE GetUserMessages
    @userID INT
AS
BEGIN
    SELECT *
    FROM messages m
    WHERE m.senderID = @userID OR m.recipientID = @userID;
END;
-- 
-- SAVE A MESSAGE
DROP PROCEDURE SaveMessage;

CREATE PROCEDURE SaveMessage
    @senderID INT,
    @recipientID INT,
    @messageContent VARCHAR(MAX)
AS
BEGIN
    INSERT INTO messages
        (senderID, recipientID, messageContent, timestamp)
    VALUES
        (@senderID, @recipientID, @messageContent, GETDATE());
END;
-- 
-- DELETE A MESSAGE
CREATE PROCEDURE DeleteMessage
    @messageID INT,
    @userID INT
AS
BEGIN
    DELETE FROM messages
        WHERE messageID = @messageID
        AND (senderID = @userID OR recipientID = @userID);
END;
-- 
-- LIKES
-- GET ALL POST LIKES
DROP PROCEDURE isLikedAndCount

CREATE PROCEDURE isLikedAndCount
    @userID INT,
    @postID INT
AS
BEGIN
    DECLARE @isLiked BIT, @likeCount INT;

    -- Check if the user has liked the post
    SELECT @isLiked = CASE WHEN EXISTS (SELECT 1 FROM likes WHERE userID = @userID AND postID = @postID) THEN 1 ELSE 0 END;

    -- Count the number of likes for the post
    SELECT @likeCount = COUNT(*) FROM likes WHERE postID = @postID;

    -- Return the results
    SELECT @isLiked AS IsLiked, @likeCount AS LikeCount;
END;



DROP PROCEDURE GetLikesCount
CREATE PROCEDURE GetLikesCount
    @postID INT
AS
BEGIN
    DECLARE @LikeCount INT;

    SELECT @LikeCount = COUNT(*)
    FROM likes
    WHERE postID = @postID;

    -- Return the like count
    SELECT @LikeCount AS 'LikeCount';
END;
-- 
-- SAVE LIKE  //LIKE POST
DROP PROCEDURE SaveLike
CREATE PROCEDURE SaveLike
    @userID INT,
    @postID INT
AS
BEGIN
    INSERT INTO likes
        (userID, postID,timestamp)
    VALUES
        (@userID, @postID, GETDATE());
END;
-- 
-- DELETE LIKE // UNLIKE POST
CREATE PROCEDURE DeleteLike
    @likeID INT
AS
BEGIN
    DELETE FROM likes
        WHERE likeID = @likeID;
END;
-- 

DROP PROCEDURE GetUsers
CREATE PROCEDURE GetUsers
AS
BEGIN
    SELECT *
    FROM users
END
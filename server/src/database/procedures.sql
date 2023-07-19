-- AUTH
-- Signup new users
    CREATE PROCEDURE SaveUser
        @userName VARCHAR(255),
        @password VARCHAR(255),
        @email VARCHAR(255),
    AS
    BEGIN
        INSERT INTO Users (username, password, email)
        VALUES (@userName, @password, @email);
    END;

    -- Get user with username
    CREATE PROCEDURE GetUser
        @userName VARCHAR(255)
    AS
    BEGIN
        SELECT *
        FROM users
        WHERE userName = @UserName;
    END;
-- 
-- POSTS
-- Get alll posts
    CREATE PROCEDURE GetUserPosts
        @userID INT
    AS
    BEGIN
        SELECT p.postID, p.content, p.timestamp
        FROM posts p
        WHERE P.userID = @userID;
    END;
-- Save post
    CREATE PROCEDURE SavePost
        @userID INT,
        @content VARCHAR(255),
        @imgUrl VARCHAR(255),
        @timestamp DATETIME
    AS
    BEGIN
        INSERT INTO Posts (userID, content, imgUrl, timestamp)
        VALUES (@userID, @content, @imgUrl, @timestamp);
    END;

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
-- Save a friend
    CREATE PROCEDURE SaveFriend
        @userID1 INT,
        @userID2 INT,
        @requestStatus VARCHAR(50)
    AS
    BEGIN
        INSERT INTO friends (userID1, userID2, requestStatus)
        VALUES (@userID1, @userID2, @requestStatus);
    END;
-- DELETE FRIEND
    CREATE PROCEDURE DeleteFriend
        @friendID INT
    AS
    BEGIN
        DELETE FROM friends
        WHERE friendID = @friendID;
    END;


-- COMMENTS
-- Get all post comments
    CREATE PROCEDURE GetPostComments
        @postID INT
    AS
    BEGIN
        SELECT c.commentText, c.timestamp
        FROM comments c
        WHERE c.postID = @postID;
    END;
-- Save a post comment
    CREATE PROCEDURE SaveComment
        @postID INT,
        @userID INT,
        @commentText VARCHAR(255),
        @timestamp DATETIME
    AS
    BEGIN
        INSERT INTO comments (postID, userID, commentText, timestamp)
        VALUES (@postID, @userID, @commentText, @timestamp);
    END;
-- DELETE COMMENT
    CREATE PROCEDURE DeleteComment
        @commentID INT
    AS
    BEGIN
        DELETE FROM comments
        WHERE commentID= @commentID;
    END;


-- NOTIFICATIONS
-- Get all the user notifications
    CREATE PROCEDURE GetUserNotifications
        @userID INT
    AS
    BEGIN
        SELECT n.notificationID, n.notificationType, n.timestamp
        FROM notifications n
        WHERE n.userID = @userID;
    END;
-- SAVE NOTIFICATION
    CREATE PROCEDURE SaveNotification
        @userID INT,
        @notificationType VARCHAR(50),
        @targetID INT,
        @timestamp DATETIME
    AS
    BEGIN
        INSERT INTO notifications (userID, notificationType, targetID, timestamp)
        VALUES (@userID, @notificationType, @targetID, @timestamp);
    END;
-- DELETE NOTIFICATION
    CREATE PROCEDURE DeleteNotification
        @notificationID INT
    AS
    BEGIN
        DELETE FROM notifications
        WHERE notificationID = @notificationID;
    END;


-- MESSAGES
-- GET ALL MESSAGES
    CREATE PROCEDURE GetUserMessages
        @userID INT
    AS
    BEGIN
        SELECT m.messageContent, m.timestamp
        FROM messages m
        WHERE m.senderID = @userID OR m.recipientID = @userID;
    END;

-- SAVE A MESSAGE
    CREATE PROCEDURE SaveMessage
        @senderID INT,
        @recipientID INT,
        @messageContent VARCHAR(MAX),
        @timestamp DATETIME
    AS
    BEGIN
        INSERT INTO messages (senderID, recipientID, messageContent, timestamp)
        VALUES (@senderID, @recipientID, @messageContent, @timestamp);
    END;
-- DELETE A MESSAGE
    CREATE PROCEDURE DeleteMessage
        @messageID INT
    AS
    BEGIN
        DELETE FROM messages
        WHERE messageID = @messageID;
    END;

-- LIKES
-- GET ALL POST LIKES
    CREATE PROCEDURE GetLikesCount
        @PostID INT
    AS
    BEGIN
        DECLARE @LikeCount INT;

        SELECT @LikeCount = COUNT(*) 
        FROM Likes
        WHERE PostID = @PostID;

        -- Return the like count
        SELECT @LikeCount AS 'LikeCount';
    END;
-- SAVE LIKE
    CREATE PROCEDURE SaveLike
        @userID INT,
        @postID INT,
        @commentID INT,
        @timestamp DATETIME
    AS
    BEGIN
        INSERT INTO likes (userID, postID, commentID, timestamp)
        VALUES (@userID, @postID, @commentID, @timestamp);
    END;

-- DELETE LIKE
    CREATE PROCEDURE DeleteLike
        @likeID INT
    AS
    BEGIN
        DELETE FROM likes
        WHERE likeID = @likeID;
    END;

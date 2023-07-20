"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const saveMessage_1 = require("./utils/saveMessage");
const auth_routes_1 = require("./routes/auth.routes");
const boot_1 = require("./lib/boot");
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const posts_routes_1 = require("./routes/posts.routes");
const likes_routes_1 = require("./routes/likes.routes");
const comments_routes_1 = require("./routes/comments.routes");
const friends_routes_1 = require("./routes/friends.routes");
const cors_1 = __importDefault(require("cors"));
// Create Express app and HTTP server
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)()); // Place the CORS middleware here to apply it to all routes
app.use((0, express_1.json)());
// App routes
app.use("/auth", auth_routes_1.authRouter);
app.use("/posts", posts_routes_1.postsRouter);
app.use("/likes", likes_routes_1.likesRouter);
app.use("/comments", comments_routes_1.commentsRouter);
app.use("/friends", friends_routes_1.friendsRouter);
app.get("/", (req, res) => {
    res.json("yoo 😎");
});
// Create Socket.IO server
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
});
// Socket.IO event handlers
io.on("connection", (socket) => {
    console.log("A client connected.");
    // Handle incoming messages
    socket.on("chatMessage", async (data) => {
        try {
            // Save the message to the database
            await (0, saveMessage_1.saveMessage)(data.senderID, data.recipientID, data.messageContent);
            // Send the message to the specified recipient
            const recipientSocket = findRecipientSocket(data.recipientID);
            if (recipientSocket) {
                recipientSocket.emit("chatMessage", data);
            }
            else {
                console.log("Recipient not found");
            }
        }
        catch (error) {
            console.error("Error saving message:", error);
        }
    });
    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});
// Find the socket of the specified recipient
function findRecipientSocket(recipientID) {
    const sockets = io.sockets.sockets.values();
    for (const socket of sockets) {
        if (socket.data.recipientID === recipientID) {
            return socket;
        }
    }
    return undefined;
}
(0, boot_1.startServer)(server);

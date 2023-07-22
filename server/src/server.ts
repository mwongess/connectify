import express, { Application, Request, Response, json } from "express";
import { saveMessage } from "./utils/saveMessage";
import { authRouter } from "./routes/auth.routes";
import { startServer } from "./lib/boot";
import { Server, Socket } from "socket.io";
import http from "http";
import { postsRouter } from "./routes/posts.routes";
import { likesRouter } from "./routes/likes.routes";
import { commentsRouter } from "./routes/comments.routes";
import { friendsRouter } from "./routes/friends.routes";
import cors from "cors";

// Create Express app and HTTP server
const app: Application = express();
const server = http.createServer(app);

app.use(cors()); // Place the CORS middleware here to apply it to all routes
app.use(json());



// App routes
app.use("/auth", authRouter);
app.use("/posts", postsRouter);
app.use("/likes", likesRouter);
app.use("/comments", commentsRouter);
app.use("/friends", friendsRouter);

app.get("/", (req: Request, res: Response) => {
  res.json("yoo 😎");
});

// Create Socket.IO server
const io = new Server(server,  {
  cors: {
    origin: "http://localhost:5173"
  }});

// Socket.IO event handlers
io.on("connection", (socket: Socket) => {
  console.log("A client connected.");
  // Handle incoming messages
  socket.on(
    "chatMessage",
    async (data: {
      senderID: string;
      recipientID: string;
      messageContent: string;
    }) => {
      try {
        console.log(data)
        // Save the message to the database
        // await saveMessage(data.senderID, data.recipientID, data.messageContent);

        // Send the message to the specified recipient
        const recipientSocket = findRecipientSocket(data.recipientID);
        // console.log(recipientSocket)
        if (recipientSocket) {
          recipientSocket.emit("chatMessage", data);
        } else {
          console.log("Recipient not found");
        }
      } catch (error) {
        console.error("Error saving message:", error);
      }
    }
  );

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Find the socket of the specified recipient
function findRecipientSocket(recipientID: string): Socket | undefined {
  const sockets = io.sockets.sockets.values();
  for (const socket of sockets) {
    // console.log(socket.data)
    if (socket.data.recipientID === recipientID) {
      return socket;
    }
  }
  return undefined;
}

startServer(server);

import express, { Application, json } from "express";
import { startServer } from "./lib/boot";
import { authRouter } from "./routes/auth.routes";
import { Server, Socket } from "socket.io";
import http from "http";
import { saveMessage } from "./utils/saveMessage";
// Create Express app and HTTP server
const app: Application = express();
const server = http.createServer(app);

app.use(json());

// Create Socket.IO server
const io = new Server(server);

// App routes
app.use("/auth", authRouter);

// Socket.IO event handlers
io.on("connection", (socket: Socket) => {
  // Handle incoming messages
  socket.on(
    "chatMessage",
    async (data: { sender: string; content: string; recipient: string }) => {
      try {
        // Save the message to the database
        await saveMessage(data.sender,data.recipient, data.content);

        // Send the message to the specified recipient
        const recipientSocket = findRecipientSocket(data.recipient);
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
    console.log("User isconnected");
  });
});

// Find the socket of the specified recipient
function findRecipientSocket(recipient: string): Socket | undefined {
  const sockets = io.sockets.sockets.values();
  for (const socket of sockets) {
    if (socket.data.username === recipient) {
      return socket;
    }
  }
  return undefined;
}

startServer(app);

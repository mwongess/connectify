import React, { useState, useEffect } from "react";
import { api } from "../../utils/domain";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import axios from "axios";

const socket = io(api);

interface Message {
  senderID: string;
  recipientID: string;
  messageContent: string;
}

const Chat: React.FC = () => {
  const [senderID] = useState("2");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    // {
    //   senderID: "1",
    //   recipientID: "2",
    //   messageContent: "Hello there!",
    // },
    // {
    //   senderID: "2",
    //   recipientID: "1",
    //   messageContent: "Hi Amos! How are you?",
    // },
    // {
    //   senderID: "1",
    //   recipientID: "2",
    //   messageContent: "I'm doing great. How about you?",
    // },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api + "/messages/" + senderID); // Replace with your API endpoint
        setMessages(response.data.messages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const { userID: recipientID } = useParams();

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (message) {
      // Send the message to the server
      socket.emit("chatMessage", {
        senderID,
        recipientID,
        messageContent: message,
      });

      // Clear the input fields
      setMessage("");
    }
  };
  useEffect(() => {
    // Event handler for receiving messages

    socket.on("chatMessage", (data: Message) => {
      if (messages[0]) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
      setMessages(() => [data]);
    });

    // Clean up the event listener
    return () => {
      socket.off("chatMessage");
    };
  }, []);
  return (
    <div className="container mx-auto h-screen">
      <div className="flex flex-col justify-between bg-white rounded-lg shadow-md p-4 mb-4 h-full">
        <div>
          {messages &&
            messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-2 ${
                  msg.senderID == senderID ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg ${
                    msg.senderID == senderID
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <p>{msg.messageContent}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="mb-4">
          <form className="flex" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type a message"
              className="border rounded-lg px-3 py-2 ml-4 w-[80%]"
              value={message}
              onChange={handleMessageChange}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 ml-4 rounded-lg w-[20%]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;

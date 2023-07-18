import { Connection } from "../helpers/db.helpers";

const db = new Connection();

export const saveMessage = async (
  senderID: string,
  recipientID: string,
  messageContent: string
) => {
  try {
    db.executeProcedure("SaveMessage", {
      senderID,
      recipientID,
      messageContent,
    });
  } catch (error) {
    throw new Error("Failed to save message to the database." + error);
  }
};

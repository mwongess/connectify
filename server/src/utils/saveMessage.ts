import { Connection } from "../helpers/db.helpers";

const db = new Connection()

export const saveMessage = async (sender: string, recipient:string, content: string) =>{
    try {
  
      // Insert the message into the database
    //   await pool.request()
    //     .input('sender', sql.VarChar, sender)
    //     .input('content', sql.VarChar, content)
    //     .query('INSERT INTO Messages (Sender, Content) VALUES (@sender, @content)');
                db.executeProcedure("SaveMessage", {sender,recipient, content})
    } catch (error) {
      throw new Error('Failed to save message to the database.' + error);
    }
  }
  
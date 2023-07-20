import { log } from "console";
import { Connection } from "../helpers/db.helpers";

const db = new Connection();

export const commentExists = async (CommentID: string) => {
  const { recordset } = await db.executeProcedure("GetComment", { CommentID });
  console.log(recordset)
  if(recordset[0]){
    return true
  }
  return false
};

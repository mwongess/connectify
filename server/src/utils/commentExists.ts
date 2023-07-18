import { Connection } from "../helpers/db.helpers";

const db = new Connection();

export const commentExists = async (CommentID: string) => {
  const { recordset } = await db.executeProcedure("GetComment", { CommentID });
  if(recordset[0]){
    return true
  }
  return false
};

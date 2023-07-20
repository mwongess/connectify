import { Connection } from "../helpers/db.helpers";

const db = new Connection();

export const postExists = async (PostID: string) => {
  const { recordset } = await db.executeProcedure("GetPost", { PostID });
  console.log(recordset)
  if(recordset[0]){
    return true
  }
  return false
};

import { Application } from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

export const startServer = (app: Application) => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is up and listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};
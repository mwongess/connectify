import dotenv from "dotenv";
dotenv.config();

const { USER, PASSWORD, SERVER, DATABASE } = process.env as {
  USER: string;
  PASSWORD: string;
  SERVER: string;
  DATABASE: string;
};

export const dbConfig = {
  user: USER as string,
  password: PASSWORD,
  server: SERVER,
  database: DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

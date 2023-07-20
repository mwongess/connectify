"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveMessage = void 0;
const saveMessage = async (sender, content) => {
    try {
        const pool = await sql.connect(dbConfig);
        // Insert the message into the database
        await pool.request()
            .input('sender', sql.VarChar, sender)
            .input('content', sql.VarChar, content)
            .query('INSERT INTO Messages (Sender, Content) VALUES (@sender, @content)');
    }
    catch (error) {
        throw new Error('Failed to save message to the database.');
    }
};
exports.saveMessage = saveMessage;

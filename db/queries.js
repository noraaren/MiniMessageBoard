const pool = require("./pool");

async function getMessages(){
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertMessage(message){
    const { author, message: text } = message;
    await pool.query(
        "INSERT INTO messages (Text, Username) VALUES ($1, $2)",
        [text, author]
    );
}

module.exports = {
    getMessages,
    insertMessage,
}
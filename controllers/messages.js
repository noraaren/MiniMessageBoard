const db = require("../db/queries");

async function getAllMessages(){ 
    try{
        const messages = await db.getMessages();
        console.log("Messages: ", messages);
        return messages;
    }catch(error){
        console.log("Failed to get messages", error);
        throw error;
    }
}

async function insertMessage(req, res){
    try{
        const message = req.body
        await db.insertMessage(message)
        return res.redirect('/');
    }catch(error){
        console.error("Failed to insert message", error)
        return res.status(500).send("Failed to insert message")
    }
}

module.exports = { 
    getAllMessages,
    insertMessage,
}
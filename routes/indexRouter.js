const express = require("express");
const router = express.Router();
const db = require("../controllers/messages");

router.get('/', async (req, res) => {
  try {
    const messages = await db.getAllMessages();
    res.render("index", { 
        title: "Mini Message Board",
        indexMessage: messages,
        name: messages.user
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).send("Error loading messages");
  }
});

router.post('/new', db.insertMessage);

module.exports = router;
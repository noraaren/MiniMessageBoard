const express = require("express");
const router = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

router.get('/', (req, res) => {
    res.render("index", { 
        title: "Mini Message Board",
        indexMessage: messages,
        name: messages.user
    });
});

router.post('/new', (req, res) =>{
    const newMessage = {
        text: req.body.message,
        user: req.body.author, 
        added: new Date()

    }
    
    messages.push(newMessage)
    res.redirect('/')

});

module.exports = router;
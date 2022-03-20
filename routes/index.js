var express = require('express');
var router = express.Router();

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: 'Charles',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.post('/new', (req, res, next) => {
  const newMessage = {
    message: req.body.messageText,
    username: req.body.username,
    date: new Date()
  }
  messages = messages.concat(newMessage);
  res.redirect('/')
})

module.exports = router;

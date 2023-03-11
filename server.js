const express = require('express');
const app = express();
const mongoose = require('./config/connection'); // import your mongoose object
const UserModel = require('./models/user'); // import your User model
const ThoughtModel = require('./models/thought'); // import your Thought model
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});




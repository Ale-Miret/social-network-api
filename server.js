// Importing required modules
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Creating the express app
const app = express();
// Setting up the port for the server
const PORT = process.env.PORT || 3001;

// Adding middleware to parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Adding routes to the app
app.use(routes);

// Connecting to the database
db.once('open', () => {
  // Starting the server on the specified port
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
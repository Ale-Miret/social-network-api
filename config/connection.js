const { connect, connection } = require('mongoose');

// Set connection string based on environment variable or default to local database
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/socialNetworkDB';

// Connect to database using Mongoose
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export Mongoose connection object
module.exports = connection;
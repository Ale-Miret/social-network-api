const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/myapp';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

module.exports = mongoose;
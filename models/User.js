// Import the necessary modules
const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Create a user schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, 'Please enter a valid email address']// Use a regular expression to validate email address format
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought' // Reference the Thought model
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User' // Reference the User model
    }]
  },
  {
    toJSON: {
      virtuals: true, // Include virtual properties when converting to JSON
      getters: true // Use getters to transform values when converting to JSON
    },
    id: false // Don't include the default '_id' property
  }
);

// Define a virtual property for the number of friends
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Create a user model
const User = model('User', userSchema);

// Export the User model
module.exports = User;

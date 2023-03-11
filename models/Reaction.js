// Importing necessary modules from Mongoose
const { Schema, Types } = require("mongoose");


// Defining a new reaction schema using the Schema constructor
const reactionSchema = new Schema(
  {
    // Defining the "reactionBody" field of the schema with type String, required, and a length validation
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 300
    },
    // Defining the "username" field of the schema with type String, required, trimmed, and a custom validation
    username: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function(v) {
          return /\S+/.test(v);
        },
        message: props => `${props.value} is not a valid username.`
      }
    },
    // Defining the "createdAt" field of the schema with type Date and a default value of the current time
    createdAt: {
      type: Date,
      default: Date.now,
      getters: true
    }
  },
   // Adding options for the schema
  {
    // Adding options for the toJSON method of the schema
    toJSON: {
      virtuals: true,
      getters: true
    }
  }
);

// Exporting the reaction schema for use in other files
module.exports = reactionSchema;

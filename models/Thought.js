// Import the necessary modules and dependencies
const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Define the schema for the Thought model
const thoughtSchema = new Schema(
  {
    // Define the thoughtText field and its properties
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    // Define the createdAt field and its properties
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    // Define the username field and its properties
    username: {
      type: String,
      required: true,
    },
    // Define the reactions field and its properties
    reactions: [reactionSchema],
  },
  {
    // Set additional options for the schema
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
// Define a virtual field for the number of reactions on a thought
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
// Define a virtual field for the formatted createdAt date
thoughtSchema.virtual("formattedCreatedAt").get(function () {
  return dateFormat(this.createdAt);
});
// Create the Thought model based on the schema
const Thought = model("Thought", thoughtSchema);
// Export the Thought model
module.exports = Thought;
// Define a helper function to format the createdAt date
function dateFormat(timestamp) {
  // Use the `toLocaleDateString()` method to format the date as MM/DD/YYYY
  return new Date(timestamp).toLocaleDateString();
}

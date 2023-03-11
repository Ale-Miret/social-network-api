const mongoose = require('mongoose');

const { Schema } = mongoose;

const ReactionSchema = new Schema({
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Reaction = mongoose.model('Reaction', ReactionSchema);

module.exports = Reaction;

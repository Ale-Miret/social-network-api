const mongoose = require('mongoose');

const { Schema } = mongoose;

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    validate: [({ length }) => length <= 280, 'Text is too long (280 max)'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reaction',
    },
  ],
});

const Thought = mongoose.model('Thought', ThoughtSchema);

module.exports = Thought;

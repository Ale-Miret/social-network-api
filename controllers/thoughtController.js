const { User, Thought, Reaction } = require('../models');

module.exports = {
   
    // Get all thoughts
    getThoughts(req, res) {
      Thought.find()
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
   
       // Get a single thought by ID
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params._id })
        .select('-__v')
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'ID does not exist' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
   
       // Create a new thought
    createThought(req, res) {
      Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    

    // Update an existing thought by ID
    updateThought(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params._id },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'This ID does not exist.' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
   
      // Delete a thought by ID
    deleteThought(req, res) {
      Thought.findOneAndDelete({ _id: req.params._id })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'ID does not exist' })
            : res.json(thought)
        )
        .then(() => res.json({ message: 'Your thought has been deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
  };

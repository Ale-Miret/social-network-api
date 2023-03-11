// Import User and Thought models
const { User, Thought } = require('../models');

// Export object containing controller methods
module.exports = {
 
    // Controller method to get all users
    getUsers(req, res) {
      User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
   
    // Controller method to get a single user by ID
    getSingleUser(req, res) {
      User.findOne({ _id: req.params._id })
        .select('-__v')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'User ID does not exist' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
  
    // Controller method to create a new user
    createUser(req, res) {
      User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },

    // Controller method to update an existing user by ID
    updateUser(req, res) {
      User.findOneAndUpdate(
        { _id: req.params._id },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'User ID does not exist' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
   
     // Controller method to delete a user by ID and all their thoughts
    deleteUser(req, res) {
      User.findOneAndDelete({ _id: req.params._id })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'User ID does not exist' })
            : Thought.deleteMany({ _id: { $in: user.thoughts } })
        )
        .then(() => res.json({ message: 'User and Thoughts have been deleted' }))
        .catch((err) => res.status(500).json(err));
    },
  };
  
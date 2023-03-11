// Import the necessary functions from the userController module
const router = require('express').Router();

// Create a new router instance using the express.Router() method
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController.js');

// Define a route for getting all users, using the getUsers function
router.route('/').get(getUsers);

// Define a route for getting a single user by ID, using the getSingleUser function
router.route('/:_id').get(getSingleUser);


// Define a route for creating a new user, using the createUser function
router.route('/createUser').post(createUser);

// Define a route for updating a user by ID, using the updateUser function
router.route('/updateUser/:_id').put(updateUser)

// Define a route for deleting a user by ID, using the deleteUser function
router.route('/deleteUser/:_id').delete(deleteUser)

// Export the router instance to be used in other files
module.exports = router;


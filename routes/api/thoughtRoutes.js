// Import the express router
const router = require('express').Router();

// Import controller functions from thoughtController.js
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
  } = require('../../controllers/thoughtController');
  
  // Define routes for the various endpoints
  // Route for GET request to /api/thoughts
  router.route('/').get(getThoughts);
  
  // Route for GET request to /api/thoughts/:_id
  router.route('/:_id').get(getSingleThought);
  
  // Route for POST request to /api/thoughts/createThought
  router.route('/createThought').post(createThought);
  
  // Route for PUT request to /api/thoughts/updateThought/:_id
  router.route('/updateThought/:_id').put(updateThought);
 
  // Route for DELETE request to /api/thoughts/deleteThought/:_id
  router.route('/deleteThought/:_id').delete(deleteThought);
  
  // Export the router
  module.exports = router;

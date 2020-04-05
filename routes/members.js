const express = require('express');
const router = express.Router();

// @route Get api/members
// @desc  Get all members
// @access Private
router.get('/', (req, res) => {
  res.send('Get all members');
});

// @route POST api/members
// @desc  Add new members
// @access Private
router.post('/', (req, res) => {
  res.send('Add member');
});

// @route PUT api/members/:id
// @desc  Update member
// @access Private
router.put('/:id', (req, res) => {
  res.send('update member');
});

// @route PUT api/members/:id
// @desc  Delete member
// @access Private
router.put('/:id', (req, res) => {
  res.send('Delete member');
});

module.exports = router;

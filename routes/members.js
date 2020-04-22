const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

// @route Get api/members
// @desc  Get all members
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Sever Error' });
  }
});

// @route POST api/members
// @desc  Add new members
// @access Public
router.post(
  '/',
  [
    check('firstName', 'First name is required').notEmpty(),
    check('lastName', 'Last name is required').notEmpty(),
    check('studentNumber', 'Student number is required').isLength({ min: 8 }),
    check('email', 'Email is required').isEmail(),
    check('phone', 'Phone number is required').isMobilePhone('en-AU'),
  ],
  async (req, res) => {
    // Send back errors if any
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      studentNumber,
      email,
      phone,
      nationality,
      studentType,
      japanese,
    } = req.body;

    try {
      // Check for existing member in DB
      let member = await Member.findOne({ studentNumber });
      if (member) {
        return res.status(400).json({ msg: 'Member already exists' });
      }

      // Create new member instance
      member = new Member({
        firstName,
        lastName,
        studentNumber,
        email,
        phone,
        nationality,
        studentType,
        fluency: japanese,
      });

      // Save in DB
      const savedMember = await member.save();
      res.json(savedMember);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

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

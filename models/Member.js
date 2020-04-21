const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
  studentNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
  },
  studentType: {
    type: String,
  },
  fluency: {
    type: String,
  },
});

module.exports = mongoose.model('member', MemberSchema);

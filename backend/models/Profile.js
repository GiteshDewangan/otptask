const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  emailAddress: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  companyName: {
    type: String,
    trim: true
  },
  selectedState: {
    type: String,
    required: true
  },
  selectedCity: {
    type: String,
    required: true
  },
  sponsorCode: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

const Profile = require('../models/Profile');

exports.storeProfile = async (req, res) => {
  console.log('Request Body:', req.body);
  try {
    const profileData = req.body;
    // Validate the data before creating a new profile
    if (!profileData.fullName || !profileData.emailAddress || !profileData.companyName || !profileData.selectedState || !profileData.selectedCity || !profileData.sponsorCode) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const emailExists = await Profile.findOne({emailAddress: profileData.emailAddress})

    if(emailExists){
      return res.status(500).json({error: 'email already'})
    }
    // console.log('passed')
    
    const profile = new Profile(profileData);
    await profile.save();
    // console.log('done')
    res.status(201).json(profile);
  } catch (error) {
    console.error('Error saving profile:', error);
    res.status(400).json({ error: error.message });
  }
};

const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../config');

const THIRD_PARTY_API_URL = 'http://185.192.96.202:9080';

router.post('/send-otp', async (req, res) => {
  try {
    const { country_code, mobile_number } = req.body;
    const response = await axios.post(`${THIRD_PARTY_API_URL}/send-otp`, {
      country_code,
      mobile_number
    });
    res.json(response.data);
  } catch (error) {
    res.json(error.message);
  }
});

router.post('/verify-otp', async (req, res) => {
  try {
    const { country_code, mobile_number, otp } = req.body;
    const response = await axios.post(`${THIRD_PARTY_API_URL}/verify-otp`, {
      country_code,
      mobile_number,
      otp
    });
    res.json(response.data);
  } catch (error) {
    res.json(error.response.data);
  }
});

module.exports = router;

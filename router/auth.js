const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const User = require('../model/userSchema');

router.use(cookieParser());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Register Route
router.post('/register', async (req, res) => {
  const { name, email, skill, ig_username, linkdin, twitter, github, password, cpassword } = req.body;

  if (!name || !email || !skill || !password || !cpassword) {
    return res.status(422).json({ error: 'Please fill all required fields' });
  }

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(420).json({ error: 'Email already exists' });
    }

    if (password !== cpassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const user = new User({ name, email, skill, ig_username, linkdin, twitter, github, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to register' });
  }
});



module.exports = router;

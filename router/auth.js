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

// Login Route
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = user.generateAuthToken();
    res.cookie('jwtoken', token, { expires: new Date(Date.now() + 25892000000), httpOnly: true });

    res.json({ message: 'User signed in successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to sign in' });
  }
});

module.exports = router;

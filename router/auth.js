const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("../db/conn");

const User = require("../model/userSchema");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/register", async (req, res) => {
  res.cookie("jwtoken", "vikash");
  const { name, email, skill, ig_username, linkdin, twitter, github, password, cpassword } = req.body;

  if (!name || !email || !skill  || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(420).json({ error: "Email already exists" });
    } else if (password !== cpassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({ 
      name, 
      skill, 
      email, 
      ig_username, 
      linkdin, 
      twitter, 
      github, 
      password: hashedPassword 
    });

    const saveMethod = await user.save();
    if (saveMethod) {
      res.status(201).json({ message: "User registered successfully" });
    } else {
      res.status(500).json({ message: "Failed to register" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Login Router
router.post('/signin', async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill in the data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      } else {
        token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie('jwtoken', token, { 
          expires: new Date(Date.now() + 25892000000), 
          httpOnly: true 
        });

        return res.json({ message: "User signed in successfully" });
      }
    } else {
      return res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

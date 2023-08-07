const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt =require('jsonwebtoken')

router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString(),
    email: req.body.email,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
    // console.log('Checking ', savedUser);
  }
});

// LOGIN

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      res.status(400).json({ message: 'user not found' });
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET
    ).toString(CryptoJS.enc.Utf8);

    if (hashedPassword !== req.body.password) {
      res.status(401).json('Wrong credentials');
    }
    accessToken=jwt.sign({
      id : user._id,
      isAdmin : user.isAdmin
    },process.env.JWT_SECRET,
    {expiresIn:"3d"})

    const {password, ...others} = user._doc;
   res.status(200).json({...others,accessToken});
  } catch (err) {
    res.status(500).json({error:err});
  }
});
module.exports = router;

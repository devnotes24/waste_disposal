/* eslint-disable camelcase */
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const createUserModel = require('../Model/regLoginMd');

exports.register = async (req, res) => {
  const User = createUserModel(req.globalDB);
  const { name, lastName , email , password } = req.body;
  console.log(name);
  try {
    const user = new User({ name, lastName , email ,password });
    await user.save();

    res.status(201).json({ success: 'User registered successfully' });
  } catch (error) {
    res.json({ error: 'User already registered/Try different email' });
  }
};

exports.login = async (req, res) => {
  const User = createUserModel(req.globalDB);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(email);
    if (!user) {
      return res.json({ error: 'User not registered yet' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ error: 'email or password is wrong' });
    }

    const token = jwt.sign({ userId: user._id}, 'Shiva@45', {
      expiresIn: '1h',
    });
    res.cookie('authToken', token, {
      httpOnly: false, // Make sure this is not set if you want JavaScript access
      secure: true,
      sameSite: 'None',
      maxAge: 3600000 // 1 hour
    });

    res.json({success: 'Successfully logged in' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

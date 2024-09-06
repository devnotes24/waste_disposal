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
    if (!user) {
      return res.json({ error: 'User not registered yet' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ error: 'Email or password is wrong' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'Shiva@45', {
      expiresIn: '1h',
    });

    // Return token in response body instead of setting a cookie
    res.json({
      success: 'Successfully logged in',
      token, // Send the token in the response
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

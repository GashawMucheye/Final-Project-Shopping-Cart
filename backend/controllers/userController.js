import bcrypt from 'bcryptjs';
import User from '../models/userModels.js';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

import expressAsyncHandler from 'express-async-handler';

import { generateToken, baseUrl } from '../utils.js';

//getting users

const getUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.find({});
  res.send(users);
});
//get user by id
const getUserById = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
});
//update user by id

const updateUserById = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);
    const updatedUser = await user.save();
    res.send({ message: 'User Updated', user: updatedUser });
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
});
const getUserByEmail = expressAsyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: 'Invalid email or password' });
});

//delete user by id

const deleteUserById = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    if (user.email === 'admin@example.com') {
      res.status(400).send({ message: 'Can Not Delete Admin User' });
      return;
    }
    await user.deleteOne();
    res.send({ message: 'User Deleted' });
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
});

const creatingSignup = expressAsyncHandler(async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });
  const user = await newUser.save();
  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user),
  });
});

const updatingProfile = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = bcrypt.hashSync(req.body.password, 8);
    }

    const updatedUser = await user.save();
    res.send({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser),
    });
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});
//forgetpassword
const forgetPassword = expressAsyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '3h',
    });
    user.resetToken = token;
    await user.save();

    //reset link
    console.log(`${baseUrl()}/reset-password/${token}`);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false,
      auth: {
        user: 'gashaw2533@gmail.com',
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // This ignores self-signed certificate errors
      },
    });

    const mailOptions = {
      from: 'gashaw2533@gmail.com',
      to: `${user.name} <${user.email}>`,
      subject: `Reset Password`,
      html: ` 
                 <p>Please Click the following link to reset your password:</p> 
                 <a href="${baseUrl()}/reset-password/${token}"}>Reset Password</a>
                  `,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        return res.send({
          message: 'Success We send link to your email for reset password',
        });
      }
    });
    // else {
    //   res.status(404).send({ message: 'User not found' });
    // }}
  }
});

const resetPassword = expressAsyncHandler(async (req, res) => {
  jwt.verify(req.body.token, process.env.JWT_SECRET, async (err, decode) => {
    if (err) {
      res.status(401).send({ message: 'Invalid Token' });
    } else {
      const user = await User.findOne({ resetToken: req.body.token });
      if (user) {
        if (req.body.password) {
          user.password = bcrypt.hashSync(req.body.password, 8);
          await user.save();
          res.send({
            message: 'Password reseted successfully',
          });
        }
      } else {
        res.status(404).send({ message: 'User not found' });
      }
    }
  });
});

export {
  getUsers,
  getUserByEmail,
  getUserById,
  deleteUserById,
  updateUserById,
  creatingSignup,
  updatingProfile,
  forgetPassword,
  resetPassword,
};

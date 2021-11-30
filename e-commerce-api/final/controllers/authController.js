const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const register = async (req, res) => {
  const { 
    email,
    name,
    password 
  } = req.body;

  const emailAlredyExists = await User.findOne({ email });
  if(emailAlredyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }

  // first registered user is an admin
  const isFirstAccount = await User.countDocuments({});
  const role = (isFirstAccount === 0) ? 'admin' : 'user'; 

  const user = await User.create({ name, email, password, role });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send('login user');
};

const logout = async (req, res) => {
  res.send('logout user');
};

module.exports = {
  register,
  login,
  logout
};
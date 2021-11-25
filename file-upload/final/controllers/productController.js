const Product = require('../models/Product');
const { StatusCodes, NOT_MODIFIED } = require('http-status-codes');

const createProduct = async (req, res) => {
  const produt = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ produt });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};

module.exports = {
  createProduct,
  getAllProducts
};
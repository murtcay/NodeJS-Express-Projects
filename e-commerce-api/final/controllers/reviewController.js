const Review = require('../models/Review');
const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { checkPermissions } = require('../utils');

const createReview = async (req, res) => {
  console.log({ body: req.body });

  const { product: productId } = req.body;
  req.body.user = req.user.userId;

  const isValidProduct = await Product.findOne({ _id: productId });
  console.log({ isValidProduct });
  if (!isValidProduct) {
    throw new CustomError.NotFoundError(`No product with id: ${productId}`);
  }

  const alreadySubmitted = await Review.findOne({
    produt: productId,
    user: req.user.userId,
  });
  console.log({ alreadySubmitted });
  if (alreadySubmitted) {
    throw new CustomError.BadRequestError(
      'Already submitted review for this product.'
    );
  }

  const review = await Review.create(req.body);

  res.status(StatusCodes.CREATED).json({ review });
};
const getAllReviews = async (req, res) => {
  res.send('get all reviewa');
};
const getSingleReview = async (req, res) => {
  res.send('get single review');
};
const updateReview = async (req, res) => {
  res.send('update review');
};
const deleteReview = async (req, res) => {
  res.send('delete review');
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};

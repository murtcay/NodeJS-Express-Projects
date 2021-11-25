const express = require('express');
const productController = require('../controllers/productController');
const uploadsController = require('../controllers/uploadsController');

const router = express.Router();

router.route('/').get(productController.getAllProducts);
router.route('/').post(productController.createProduct);
router.route('/uploads').post(uploadsController.uploadProductImage);

module.exports = router;
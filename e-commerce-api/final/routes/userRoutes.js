const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/').get(userController.getAllUsers);
router.route('/showMe').get(userController.showCurrentUser);

router.route('/updateUser').patch(userController.updateUser);
router.route('/updateUserPassword').patch(userController.updateUserPassword);

router.route('/:id').get(userController.getSingleUser);

module.exports = router;
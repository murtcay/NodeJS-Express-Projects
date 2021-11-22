const express = require('express');
const router = express.Router();

const jobsController = require('../controllers/jobs');

router.route('/').get(jobsController.getAllJobs);
router.route('/').post(jobsController.createJob);
router.route('/:id').get(jobsController.getJob);
router.route('/:id').patch(jobsController.updateJob);
router.route('/:id').delete(jobsController.deleteJob);

module.exports = router;
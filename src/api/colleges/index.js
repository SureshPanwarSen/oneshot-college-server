const express = require('express');

const router = express.Router();
const controller = require('./college.controller');

router.get('/stats', controller.getStats);
router.post('/similar-colleges', controller.getSimilarColleges);
router.get('/:_id', controller.getCollegeById);
router.get('/', controller.getCollegeList);
router.post('/', controller.addCollege);
router.put('/', controller.updateCollegeById);
router.delete('/:_id', controller.archiveCollegeById);

module.exports = router;

const express = require('express');

const router = express.Router();
const controller = require('./student.controller');

router.get('/:_id', controller.getStudentById);
router.get('/', controller.getStudentsList);
router.post('/', controller.addStudent);
router.put('/', controller.updateStudentById);
router.delete('/:_id', controller.archiveStudentById);

module.exports = router;

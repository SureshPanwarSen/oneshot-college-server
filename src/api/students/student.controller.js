const StudentsService = require('../../services/student/student.service');

const studentService = new StudentsService();

/**
 * Get student details using studentId
 */
exports.getStudentById = async (req, res) => {
  try {
    const { _id } = req.params;
    if (_id) {
      const student = await studentService.getById(_id);

      return res.status(200).send(student);
    }
    return res.status(422).send({ message: 'studentId is required' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error in get student details by studentId', error });
  }
};

/**
 * Archive student by using studentId
 */
exports.archiveStudentById = async (req, res) => {
  try {
    const { _id } = req.params;
    if (_id) {
      await studentService.deleteStudent(_id);

      return res.status(200).send({ message: 'deleted successfully' });
    }
    return res.status(422).send({ message: 'studentId is required' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error in delete student', error });
  }
};

/**
 * Get the list of all students using this function
 */
exports.getStudentsList = async (req, res) => {
  try {
    const students = await studentService.getStudentsList(req.query);

    return res.status(200).send(students);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error in get students list', error });
  }
};

/**
 * Update student using this function
 */
exports.updateStudentById = async (req, res) => {
  try {
    const { _id } = req.body;
    if (_id) {
      await studentService.updateById(req.body);

      return res.status(200).send({ message: 'student updated successfully' });
    }

    return res.status(422).send({ message: 'studentId is required' });
  } catch (error) {
    console.error(error);

    return res.status(500).send({ message: 'Error in update student', error });
  }
};

/**
 * Add new student using this function
 */
exports.addStudent = async (req, res) => {
  try {
    const { email, firstName, lastName, phone } = req.body;

    if (email && firstName && lastName && phone) {
      const student = await studentService.addStudent(req.body);

      return res.status(200).send(student);
    }

    return res.status(422).send({ message: 'email, firstName, lastName, phone' });
  } catch (error) {
    console.error(error);

    return res.status(500).send({ message: 'Error in add new student', error });
  }
};

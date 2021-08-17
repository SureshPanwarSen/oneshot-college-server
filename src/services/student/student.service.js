/* eslint-disable no-return-await */
const Repository = require('../../api/students/student.repository');

class Service {
  constructor() {
    this.repository = new Repository();
  }

  /**
   * Use this function to create new student with all the required details
   * @param {Object} student
   */
  async createStudent(student) {
    return await this.repository.create(student);
  }

  /**
   * Use this function to update student details using studentId
   * @param {Object} student
   */
  async updateById(student) {
    return await this.repository.updateById(student);
  }

  /**
   * Get student details using id
   * @param {String} id
   */
  async getById(id) {
    return await this.repository.getById(id);
  }

  /**
   * Use this function to get the list of all active students
   */
  async getStudentsList(query) {
    return await this.repository.getByQuery(query);
  }

  /**
   * Use this function to delete an student form database
   * @param {String} id
   */
  async deleteStudent(id) {
    return this.repository.archiveById(id);
  }
}

module.exports = Service;

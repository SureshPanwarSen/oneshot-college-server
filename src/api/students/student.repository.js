/* eslint-disable no-return-await */
const model = require('../../dbModels/student');

const BaseRepository = require('../../baseRepository/baseRepository');

/**
 * User repository where all the db actions connections should be handled
 */
class Repository extends BaseRepository {
  constructor() {
    super('students');
  }

  /**
   * Use this function to get the list of all the active students
   */
  async getStudentsList() {
    return await model.find({ archived: false });
  }
}

module.exports = Repository;

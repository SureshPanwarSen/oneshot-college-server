/* eslint-disable no-return-await */
const Repository = require('../../api/colleges/college.repository');

class Service {
  constructor() {
    this.repository = new Repository();
  }

  /**
   * Use this function to create college with all the required details
   * @param {Object} college
   */
  async createCollege(college) {
    return await this.repository.create(college);
  }

  /**
   * Use this function to update college details using collegeId
   * @param {Object} college
   */
  async updateById(college) {
    return await this.repository.updateById(college);
  }

  /**
   * Get college details using id
   * @param {String} id
   */
  async getById(id) {
    return await this.repository.getById(id);
  }

  /**
 * Get Similar colleges
 * @param {Object} college
 */
  async getSimilarColleges(college) {
    return await this.repository.getSimilarColleges(college);
  }

  /**
   * Use this function to get filtered results
   */
  async getCollegeList(query) {
    let dbQuery = {};

    if (query.state) {
      dbQuery.state = query.state;
    };
    if (query.course) {
      dbQuery.courses = { $in: [query.course] };
    };

    return await this.repository.getByQuery(dbQuery);
  }

  /**
   * Use this function to get the list of all active colleges
   */
  async getStats(type) {
    return await this.repository.getStats(type);
  }

  /**
   * Use this function to delete an college form database
   * @param {String} id
   */
  async deleteCollege(id) {
    return this.repository.archiveById(id);
  }
}

module.exports = Service;

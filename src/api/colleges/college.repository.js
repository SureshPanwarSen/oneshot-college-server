/* eslint-disable no-return-await */
const model = require('../../dbModels/college');

const BaseRepository = require('../../baseRepository/baseRepository');

/**
 * User repository where all the db actions connections should be handled
 */
class Repository extends BaseRepository {
  constructor() {
    super('colleges');
  }

  /**
   * Use this function to get the list of all the active colleges
   */
  async getStats(type) {
    let results = {};

    const totalColleges = await model.find().countDocuments()

    if (type === 'state') {
      results = await model.aggregate([
        {
          $group: {
            _id: '$state',
            name: { $first: '$state' },
            type: { $first: 'state' },
            total: { $first: totalColleges },
            value: { $sum: 1 }
          }
        },
        {
          $project: {
            name: '$name',
            type: '$type',
            value: { $round: [{ '$multiply': [{ '$divide': ['$value', '$total'] }, 100] }, 2] }
          }
        }
      ])
    } else if (type === 'course') {
      results = await model.aggregate([
        { $unwind: "$courses" },
        {
          $group: {
            _id: "$courses",
            name: { $first: '$courses' },
            type: { $first: 'course' },
            total: { $first: totalColleges },
            value: { $sum: 1 }
          }
        },
        {
          $project: {
            name: '$name',
            type: '$type',
            value: { $round: [{ '$multiply': [{ '$divide': ['$value', '$total'] }, 100] }, 2] }
          }
        }
      ])
    }

    return results;
  }

  async getSimilarColleges(college) {

    const results = await model.find({
      state: college.state,
      totalStudents: {
        $gte: college.totalStudents - 10,
        $lte: college.totalStudents + 10
      },
      courses: {
        $in: [college.courses]
      }
    })

    return results;
  }
}

module.exports = Repository;

const CollegeService = require('../../services/college/college.service');

const collegeService = new CollegeService();

/**
 * Get college details using collegeId
 */
exports.getCollegeById = async (req, res) => {
  try {
    const { _id } = req.params;

    if (_id) {
      const college = await collegeService.getById(_id);
      return res.status(200).send(college);
    }

    return res.status(422).send({ message: 'collegeId is required' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error in get college by collegeId', error });
  }
};

/**
 * Get similar colleges list
 */
exports.getSimilarColleges = async (req, res) => {
  try {
    const college = await collegeService.getSimilarColleges(req.body);
    return res.status(200).send(college);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error in get college by collegeId', error });
  }
};

/**
 * Get college details using collegeId
 */
exports.getCollegeById = async (req, res) => {
  try {
    const { _id } = req.params;

    if (_id) {
      const college = await collegeService.getById(_id);
      return res.status(200).send(college);
    }

    return res.status(422).send({ message: 'collegeId is required' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error in get college by collegeId', error });
  }
};

/** 
 * Get college archive college by using collegeId
 */
exports.archiveCollegeById = async (req, res) => {
  try {
    const { _id } = req.params;

    if (_id) {
      await collegeService.deleteCollege(_id);
      return res.status(200).send({ message: 'deleted successfully' });
    }

    return res.status(422).send({ message: 'collegeId is required' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error in delete college', error });
  }
};

/**
 * Get the list of all available college using this function
 */
exports.getCollegeList = async (req, res) => {
  try {
    const colleges = await collegeService.getCollegeList(req.query);

    return res.status(200).send(colleges);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error in get colleges list', error });
  }
};

/**
 * Get the list of all available college using this function
 */
exports.getStats = async (req, res) => {
  try {
    const { type } = req.query;
    if (type) {
      const colleges = await collegeService.getStats(type);
      return res.status(200).send(colleges);
    }

    return res.status(200).send({ message: 'Please provide type of stats for statics' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error in get colleges list', error });
  }
};

/**
 * Update college details using this function
 */
exports.updateCollegeById = async (req, res) => {
  try {
    const { body } = req.body;

    if (body && body._id) {
      const college = await collegeService.updateById(req.body);

      return res.status(200).send({ college, message: 'college details updated successfully' });
    }

    return res.status(422).send({ message: 'collegeId is required' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error in update college details', error });
  }
};

/**
 * Add new college using this function
 */
exports.addCollege = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (name && email) {
      const user = await collegeService.createCollege(req.body);

      return res.status(200).send(user);
    }

    return res.status(422).send({ message: 'name and email are required' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error in add new college', error });
  }
};

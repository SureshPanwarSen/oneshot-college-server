/* eslint-disable func-names */
/* eslint-disable no-buffer-constructor */

const mongoose = require('mongoose');

const { Schema } = mongoose;

/** College ID will be mongooseID it will be auto generated */
const College = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    totalStudents: Number,
    email: String,
    foundedYear: Number,
    departments: [String],
    courses: [String],
    addressLine: String,
    city: String,
    state: String,
    country: String,
    code: String, /** PinCode or ZipCode */
    ratings: {
      type: Number,
      default: 0
    },
    archived: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const collegeModel = mongoose.model('colleges', College);

module.exports = collegeModel;

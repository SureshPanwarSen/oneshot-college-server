/* eslint-disable func-names */
/* eslint-disable no-buffer-constructor */

const mongoose = require('mongoose');

const { Schema } = mongoose;

/** Student ID will be mongooseID it will be auto generated */
const Student = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    rollNumber: Number,
    age: Number,
    gender: String,
    email: String,
    batchYear: {
      type: Number,
      required: true
    },
    collegeId: { type: String, required: true },
    department: String,
    currentSemester: Number,
    cpi: String,
    skills: [String],
    addressLine: String,
    city: String,
    state: String,
    country: String,
    code: String, /** PinCode or ZipCode */
    archived: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const studentModel = mongoose.model('students', Student);

module.exports = studentModel;

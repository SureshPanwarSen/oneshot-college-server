/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

/**
 * @NOTE write all the common db queries and functionalities in this base repository only.
 * This is a base repository for all the db models.
 * @how Here we can access all the common actions on any of the defined db model.
 * It is easy to maintain and remove the duplicity of the same functionalities.
 */
class BaseRepository {
  constructor(collectionName) {
    this.dbModel = mongoose.model(collectionName);
    this.collection = collectionName;
  }

  /**
   * This is a generic function which will use defined db schema and create new entry respectively.
   * @param {*} document
   * @returns {Object} created doc
   */
  async create(document) {
    const doc = await this.dbModel.create(document);
    return doc;
  }

  /**
   * Use this function to find the only document with satisfy the query.
   * @param {Object} query
   */
  async findOne(query) {
    const doc = await this.dbModel.findOne(query);
    return doc;
  }

  /**
   * This is a generic function which will use defined db schema and update the existing entry respectively.
   * @param {*} document
   * @returns {Object} updated doc
   */
  async updateById(document) {
    let doc = await this.dbModel.findOneAndUpdate(
      {
        _id: document._id
      },
      { $set: document },
      {
        new: true
      }
    );

    if (!doc) doc = {};
    return doc;
  }

  /**
   * This is a generic function which will set archive as true for the existing document.
   * @param {*} _id
   * @returns {Object} updated doc
   */
  async archiveById(_id) {
    let doc = await this.dbModel.findOneAndUpdate(
      {
        _id,
        archived: false
      },
      { $set: { archived: true } },
      {
        new: true
      }
    );

    if (!doc) doc = {};
    return doc;
  }

  /**
   * Get record by it's ObjectId
   * @param {ObjectId} _id
   * @returns {Object} doc
   */
  async getById(_id) {
    let doc = await this.dbModel.findOne({ _id, archived: false });
    if (!doc) doc = {};
    return doc;
  }

  /**
   * Get all the records which satisfies the following given query
   * @param {*} query
   * @returns {Array} of records which satisfies the given conditions in query
   */
  async getStats(query) {
    let results = await this.dbModel.find(query);
    if (!results) results = [];
    return results;
  }
  /**
   * Get all the records which satisfies the following given query
   * @param {*} query
   * @returns {Array} of records which satisfies the given conditions in query
   */
  async getByQuery(query) {
    let results = await this.dbModel.find(query);
    if (!results) results = [];
    return results;
  }

  /**
   * Use this function to update by query and dbOptions
   *
   * @param {*} query query for which document to update
   * @param {*} data data which needs to be updated
   * @param {*} dbOptions db options on the query
   */
  async updateByQueryAndDbOptions(query, data, dbOptions) {
    const response = await this.dbModel.findOneAndUpdate(query, { $set: data }, dbOptions);
    return response;
  }

  /**
   * Use this function to get by query and dbOptions
   *
   * @param {*} query query for which document to get
   * @param {*} dbOptions db options on the query
   */
  async getByQueryAndDbOptions(query, dbOptions) {
    const response = await this.dbModel.findOne(query, dbOptions);
    return response;
  }
}

module.exports = BaseRepository;

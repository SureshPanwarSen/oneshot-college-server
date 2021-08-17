/* eslint-disable global-require */
/* eslint-disable func-names */
const express = require('express');
const path = require('path');

module.exports = function(app) {
  app.use(express.static(path.join(__dirname, '/../public')));
  app.use('/node_modules', express.static(path.join(process.cwd(), '/node_modules')));

  app.use('/api/students', require('./api/students'));
  app.use('/api/colleges', require('./api/colleges'));

  app.route('/*').get((req, res) => {
    res.sendFile(path.join(process.cwd(), '/public/index.html'));
  });
};

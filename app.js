// const envFolder = ['production', 'development'].includes(process.env.NODE_ENV)
//   ? '/etc/config'
//   : __dirname;
const envFile = `${process.env.NODE_ENV === 'production' ? '' : '.dev'}.env`;
const exist = require('fs').existsSync(envFile);
require('events').EventEmitter.prototype._maxListeners = 100;

if (!exist) {
  console.log(".env file doesn't exist");

  throw new Error(".env file doesn't exist");
}

require('dotenv').config({
  path: envFile
});

const express = require('express');
const path = require('path');
const cons = require('consolidate');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const app = express();

/** view engine setup */
app.engine('html', cons.swig);
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'html');

const config = require('./config');

require('./src/config/express')(app);

//* ******************** DATABASE CONNECTION *********************//
const DB_OPTS = {
  auto_reconnect: true,
  useNewUrlParser: true,
  keepAlive: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000
};

mongoose.connect(config.devDb, DB_OPTS);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection-error'));
db.once('open', () => {
  console.log('Connected to mongoDb :-', config.devDb);
  require('./app-mock-data-generator');
});

db.on('disconnected', () => {
  console.log(`Disconnected mongoDb :- ${config.devDb}`);
  mongoose.connect(config.devDb, DB_OPTS);
});

app.use(cors());

require('./src/routes')(app);

module.exports = app;

/* eslint-disable global-require */
/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */

/**
 * Express configuration
 */
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const errorHandler = require('errorhandler');
const path = require('path');
const rfs = require('rotating-file-stream');
const fs = require('fs');
const passport = require('passport');

const moment = require('moment');

const config = require('../../config');

const logDirectory = path.join(process.cwd(), 'logs');

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs('access.log', {
  interval: '3d',
  path: logDirectory
});

function logger(app) {
  morgan.token('body', (req, res) => JSON.stringify(req.body));

  app.use(
    morgan(
      (tokens, req, res) =>
        [
          '\n\n',
          moment().format('Do MMMM YYYY,  h:mm:ss a'),
          '\nRequest: ',
          tokens.method(req, res),
          tokens.url(req, res),
          'req-body: ',
          tokens.body(req, res),
          '\nResponse: ',
          tokens.status(req, res),
          tokens['response-time'](req, res),
          'ms'
        ].join(' '),
      { stream: accessLogStream }
    )
  );
}

module.exports = function(app) {
  app.use(compression());
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(passport.initialize());
  app.use(passport.session());

  if (config.envType && config.envType === 'production') {
    logger(app);
  } else {
    app.use(require('connect-livereload')());
    logger(app);
    app.use(errorHandler());
  }
};

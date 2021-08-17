let hostURL = 'https://www.oneshot.io/';

if (process.env.NODE_ENV !== 'production') {
  hostURL = 'http://localhost:3000/';
}

module.exports = {
  envType: process.env.NODE_ENV,
  hostURL,
  devDb: process.env.MONGODB_URL
};

/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
exports.customError = async function(text) {
  const message = {
    data: {
      status: false,
      error: {
        message: text
      }
    }
  };
  return message;
};

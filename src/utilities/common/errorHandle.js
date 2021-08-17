async function handleErrors(req, res, err) {
  return res.json({
    success: false,
    status: 422,
    message: err,
    data: null
  });
}

module.exports.handleErrors = handleErrors;

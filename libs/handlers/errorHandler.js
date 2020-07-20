module.exports.handleError = function (req, res, error) {
  return res.status(503).json({ message: 'unexpected error occurred!' });
};

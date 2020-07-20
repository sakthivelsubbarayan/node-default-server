const jwt = require('jsonwebtoken');
const User = require('../../models/user.model');

module.exports.checkAuth = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send({
      message: 'Protected resource, use Authorization header to get access.',
    });
  }
  const token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, req.app.get('secret'), (err, docodeduser) => {
    if (err) {
      return res.status(401).send({
        message: 'Protected resource, use Authorization header to get access.',
      });
    }
    User.findOne(
      {
        _id: docodeduser._id,
      }, { jwtToken: 1 },
      (err, user) => {
        if (err) {
          return res.status(401).send({
            message: 'Protected resource, use Authorization header to get access.',
            logout: true,
          });
        } else if (user.jwtToken !== token) {
          return res.status(401).send({
            message: ' Authorization token mismatched!.',
            logout: true,
          });
        }
        req.reqUserId = docodeduser._id;
        return next();
      },
    );
  });
};

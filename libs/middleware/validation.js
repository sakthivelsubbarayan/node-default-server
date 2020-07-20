
module.exports = function checkValidation(validationSchema) {
  return async function validation(req, res, next) {
    const schemavalidate = validationSchema.validate(req.body);
    if (schemavalidate.error) {
      console.log("\n\n\n\n\n------schemavalidate--------\n\n\n\n---------");
      console.log(schemavalidate);
      console.log("\n\n\n\n\n------schemavalidate--------\n\n\n\n---------");
      if (schemavalidate.error.details[0].message && (schemavalidate.error.details[0].message.indexOf('must be one of')) !== -1) {
        return res.status(401).json({ message: 'Bad Request : Please provide valid data' });
      }
      return res.status(401).json({ message: schemavalidate.error.details[0].message });
    }
    return next();
  };
};

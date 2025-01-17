const { CustomAPIError } = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err });
  }
  console.log(err);
  return res.status(err.status).json({ msg: err.message });
};

module.exports = errorHandler;

const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      //goes to the next middleware that deals with errors
      next(error);
    }
  };
};

module.exports = asyncWrapper;

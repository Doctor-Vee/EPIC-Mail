const RouteValidator = {
  id(req, res, next) {
    if (!/^[0-9]+$/.test(req.params.id)) {
      return res.status(400).send({
        status: 400,
        error: 'The id can only be a number',
      });
    }
    return next();
  },
};

export default RouteValidator;

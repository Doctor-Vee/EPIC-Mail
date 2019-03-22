const GroupValidator = {
  create(req, res, next) {
    if (!req.body.name) {
      return res.status(400).send({
        status: 400,
        error: 'Group Name cannot be blank',
      });
    }
    return next();
  },
};

export default GroupValidator;

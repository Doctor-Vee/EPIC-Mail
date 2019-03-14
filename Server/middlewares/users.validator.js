const UserValidator = {
  valCreate(req, res, next) {
    if (req.body.password.length < 6) {
      return res.status(400).send({
        status: 400,
        error: 'Password must not be less than 6 characters',
      });
    }
    return next();
  },
};

export default UserValidator;

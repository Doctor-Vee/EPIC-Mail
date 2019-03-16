const UserValidator = {
  create(req, res, next) {
    if (!req.body.firstName) {
      return res.status(400).send({
        status: 400,
        error: 'First Name is required',
      });
    }
    if (!req.body.lastName) {
      return res.status(400).send({
        status: 400,
        error: 'Last Name is required',
      });
    }
    if (!/^[a-zA-z]+$/.test(req.body.firstName) || !/^[a-zA-z]+$/.test(req.body.lastName)) {
      return res.status(400).send({
        status: 400,
        error: 'Names must contain only alphabets',
      });
    }
    if (req.body.firstName.length < 2 || req.body.lastName.length < 2) {
      return res.status(400).send({
        status: 400,
        error: 'Names cannot be less than 2 characters',
      });
    }
    if (!req.body.email) {
      return res.status(400).send({
        status: 400,
        error: 'Email is required',
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.body.email)) {
      return res.status(400).send({
        status: 400,
        error: 'Enter a valid email address',
      });
    }
    if (!req.body.password) {
      return res.status(400).send({
        status: 400,
        error: 'Password is required',
      });
    }
    if (req.body.password.length < 6) {
      return res.status(400).send({
        status: 400,
        error: 'Password must not be less than 6 characters',
      });
    }
    return next();
  },
  login(req, res, next) {
    if (!req.body.email) {
      return res.status(400).send({
        status: 400,
        error: 'Email is required',
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.body.email)) {
      return res.status(400).send({
        status: 400,
        error: 'Enter a valid email address',
      });
    }
    if (!req.body.password) {
      return res.status(400).send({
        status: 400,
        error: 'Password is required',
      });
    }
    return next();
  },
};

export default UserValidator;

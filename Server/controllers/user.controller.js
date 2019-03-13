import UserModel from '../models/users.model';

const UserController = {
  create(req, res) {
    if (req.body.password.length < 6) {
      return res.status(400).send('password must not be less than 6 characters');
    }
    const createdUser = UserModel.create(req.body);
    return res.status(201).send({
      status: 201,
      data: createdUser,
    });
  },
  login(req, res) {
    const foundUser = UserModel.login(req.body);
    if (!foundUser) {
      return res.status(404).send({
        status: 404,
        error: 'User does not exist',
      });
    }
    if (foundUser.password !== req.body.password) {
      return res.status(401).send({
        status: 401,
        error: 'Wrong password',
      });
    }
    return res.status(200).send({
      status: 200,
      data: foundUser,
    });
  },
};

export default UserController;

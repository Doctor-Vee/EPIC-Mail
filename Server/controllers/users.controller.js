import UserModel from '../models/users.model';

const UserController = {
  create(req, res) {
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

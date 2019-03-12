import UserModel from '../models/users.model';

const UserController = {
  create(req, res) {
    if (req.body.password.length < 6) {
      return res.status(400).send('password must not be less than 6 characters');
    }
    const createdUser = UserModel.create(req.body);
    return res.status(201).send({
      status: 'success',
      data: createdUser,
    });
  },
};

export default UserController;

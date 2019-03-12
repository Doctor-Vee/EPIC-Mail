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
  login(req, res) {
    const foundUser = UserModel.login(req.body);
    if (!foundUser) return res.status(404).send('User not found! \nTry Again');
    if (foundUser.password !== req.body.password) {
      return res.status(401).send('Invalid password');
    }
    return res.status(200).send({
      status: 'success',
      data: foundUser,
    });
  },
};

export default UserController;

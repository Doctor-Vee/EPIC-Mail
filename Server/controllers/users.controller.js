import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserModel from '../models/users.model';

const UserController = {
  create(req, res) {
    const createdUser = UserModel.create(req.body);
    const token = jwt.sign({ id: createdUser.id }, process.env.SECRET, { expiresIn: '1h' });
    return res.status(201).send({
      status: 201,
      token,
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

    bcrypt.compare(req.body.password, foundUser.password)
      .then((matches) => {
        if (matches) {
          const token = jwt.sign({ id: foundUser.id, email: foundUser.email }, process.env.SECRET, { expiresIn: '1h' });
          return res.status(200).json({
            status: 'Accepted',
            token,
          });
        }
        return res.status(401).json({
          status: 'Wrong password',
        });
      })
      .catch(error => console.log(error));
    // if (foundUser.password !== req.body.password) {
    //   return res.status(401).send({
    //     status: 401,
    //     error: 'Wrong password',
    //   });
    // }

  //   return res.status(200).send({
  //     status: 200,
  //     data: foundUser,
  //   });
  },
};

export default UserController;

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../models/db';

const UserController = {
  create(req, res) {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 10);
    let createdUser;
    const postQuery = `INSERT INTO users (email, first_name, last_name, password, phone_number) 
    VALUES($1, $2, $3, $4, $5) RETURNING *; `;
    pool.query(postQuery, [user.email, user.firstName, user.lastName, user.password, user.phoneNumber])
      .then((results) => {
        [createdUser] = results.rows;
        const token = jwt.sign({ id: createdUser.id }, process.env.SECRET, { expiresIn: '1h' });
        return res.status(201).json({
          status: 201,
          data: [{
            token, createdUser,
          }],
        });
      });
  },

  login(req, res) {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = $1';
    // const hashedPassword = bcrypt.hashSync(password, 10);
    pool.query(query, [email], (err, data) => {
      if (err) {
        return err;
      }
      if (!data.rows[0]) {
        return res.status(401).send({
          status: 401,
          error: 'Invalid login details',
        });
      }

      const user = data.rows[0];
      bcrypt.compare(password, data.rows[0].password)
        .then((matches) => {
          if (matches) {
            const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET, { expiresIn: '1h' });
            return res.status(200).json({
              status: 200,
              data: [{
                token,
              }],
            });
          }
          return res.status(401).json({
            status: 401,
            error: 'Invalid login details',
          });
        });
    });
  },
};
export default UserController;

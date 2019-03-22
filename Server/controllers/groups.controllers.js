import pool from '../models/db';

const GroupController = {
  create(req, res) {
    const group = req.body;
    let createdGroup;
    const postQuery = `INSERT INTO groups (name, description) 
      VALUES($1, $2) RETURNING *; `;
    pool.query(postQuery, [group.name, group.description])
      .then((results) => {
        [createdGroup] = results.rows;
        return res.status(201).json({
          status: 201,
          data: createdGroup,
        });
      });
  },

  getAll(req, res) {
    const query = 'SELECT * FROM groups';
    pool.query(query, (err, data) => {
      if (err) {
        return err;
      }
      const allGroups = data.rows;
      return res.status(200).send({
        status: 200,
        data: allGroups,
      });
    });
  },

  delete(req, res) {
    const { id } = req.params;
    const query = `DELETE FROM groups WHERE id = ${id};`;
    pool.query(query, (err) => {
      if (err) {
        return err;
      }
      return res.status(200).send({
        status: 200,
        data: 'deleted successfully',
      });
    });
  },
};

export default GroupController;

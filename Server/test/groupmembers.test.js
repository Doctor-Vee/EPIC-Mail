import pool from '../models/db';

const GroupMemberController = {
  create(req, res) {
    const groupMember = req.body;
    let createdGroupMember;
    const postQuery = `INSERT INTO all_group_members (group_id, email, first_name, last_name, role) 
      VALUES($1, $2, $3, $4, $5) RETURNING *; `;
    pool.query(postQuery, [groupMember.groupId, groupMember.email, groupMember.firstName, groupMember.lastName, groupMember.role])
      .then((results) => {
        [createdGroupMember] = results.rows;
        return res.status(201).json({
          status: 201,
          data: createdGroupMember,
        });
      });
  },

  delete(req, res) {
    const { id } = req.params;
    const query = `DELETE FROM all_group_members WHERE member_id = ${id};`;
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

export default GroupMemberController;

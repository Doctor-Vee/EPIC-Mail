import pool from '../models/db';

const MessageController = {
  create(req, res) {
    const message = req.body;
    let createdMessage;
    const postQuery = `INSERT INTO messages (sender_id, subject, message) 
      VALUES($1, $2, $3) RETURNING *; `;
    pool.query(postQuery, [message.senderId, message.subject, message.message])
      .then((results) => {
        [createdMessage] = results.rows;
        return res.status(201).json({
          status: 201,
          data: createdMessage,
        });
      });
  },

  getAll(req, res) {
    const query = 'SELECT * FROM messages';
    pool.query(query, (err, data) => {
      if (err) {
        return err;
      }
      const allMessages = data.rows;
      return res.status(200).send({
        status: 200,
        data: allMessages,
      });
    });
  },

  getInbox(req, res) {
    const { id } = req.params;
    const query = `SELECT id, sender_id, subject, message, receiver_id FROM messages WHERE receiver_id = ${id};`;
    pool.query(query, (err, data) => {
      if (err) {
        return err;
      }
      const inbox = data.rows;
      return res.status(200).send({
        status: 200,
        data: inbox,
      });
    });
  },

  getOne(req, res) {
    const { id } = req.params;
    const query = `SELECT * FROM messages WHERE id = ${id}`;
    pool.query(query, (err, data) => {
      if (err) {
        return err;
      }
      const message = data.rows[0];
      return res.status(200).send({
        status: 200,
        data: message,
      });
    });
  },


  getUnread(req, res) {
    const { id } = req.params;
    const query = `SELECT id, sender_id, subject, message, receiver_id, status, created_on FROM messages WHERE sender_id = ${id} AND status != 'draft'`;
    pool.query(query, (err, data) => {
      if (err) {
        return err;
      }
      const inbox = data.rows;
      return res.status(200).send({
        status: 200,
        data: inbox,
      });
    });
  },

  getSent(req, res) {
    const { id } = req.params;
    const query = `SELECT id, sender_id, subject, message, receiver_id FROM messages WHERE sender_id = ${id};`;
    pool.query(query, (err, data) => {
      if (err) {
        return err;
      }
      const sentMessages = data.rows;
      return res.status(200).send({
        status: 200,
        data: sentMessages,
      });
    });
  },

  delete(req, res) {
    const { id } = req.params;
    const query = `DELETE FROM messages WHERE id = ${id};`;
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

export default MessageController;

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


  // getAll(req, res) {
  //   const allMessages = MessageModel.getAll();
  //   return res.status(200).send({
  //     status: 200,
  //     data: allMessages,
  //   });
  // },

  getReceived(req, res) {
    const foundMessage = MessageModel.getReceived();
    if (!foundMessage) {
      return res.status(404).send({
        status: 404,
        error: 'You have no received messages',
      });
    }
    return res.status(200).send({
      status: 200,
      data: foundMessage,
    });
  },

  getOne(req, res) {
    const foundMessage = MessageModel.getOne(req.params.id);
    if (!foundMessage) {
      return res.status(404).send({
        status: 404,
        error: 'Message does not exist',
      });
    }
    return res.status(200).send({
      status: 200,
      data: foundMessage,
    });
  },

  getUnread(req, res) {
    const foundMessage = MessageModel.getUnread();
    if (!foundMessage) {
      return res.status(404).send({
        status: 404,
        error: 'You have no unread messages',
      });
    }
    return res.status(200).send({
      status: 200,
      data: foundMessage,
    });
  },

  getSent(req, res) {
    const foundMessage = MessageModel.getSent();
    if (!foundMessage) {
      return res.status(404).send({
        status: 404,
        error: 'You have no sent messages',
      });
    }
    return res.status(200).send({
      status: 200,
      data: foundMessage,
    });
  },

  delete(req, res) {
    const { id } = req.params;
    const deletedMessage = MessageModel.delete(id);
    if (!deletedMessage) return res.status(404).send('Message does not exist');
    return res.status(200).send({
      status: 200,
      data: deletedMessage,
    });
  },
};

export default MessageController;

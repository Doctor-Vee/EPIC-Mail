import MessageModel from '../models/messages.model';

const MessageController = {
  create(req, res) {
    if (!req.body.subject) {
      return res.status(400).send({
        status: 400,
        error: 'Subject field cannot be empty',
      });
    }
    if (!req.body.message) {
      return res.status(400).send({
        status: 400,
        error: 'Message field cannot be empty',
      });
    }
    const createdMessage = MessageModel.create(req.body);
    return res.status(201).send({
      status: 201,
      data: createdMessage,
    });
  },

};

export default MessageController;

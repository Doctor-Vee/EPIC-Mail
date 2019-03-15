import MessageModel from '../models/messages.model';

const MessageController = {
  create(req, res) {
    const createdMessage = MessageModel.create(req.body);
    return res.status(201).send({
      status: 201,
      data: createdMessage,
    });
  },

  getAll(req, res) {
    const allMessages = MessageModel.getAll();
    return res.status(200).send({
      status: 200,
      data: allMessages,
    });
  },

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
    if (!deletedMessage) return res.status(404).send('Not found! \nTry Again');
    return res.status(200).send({
      status: 'success',
      data: deletedMessage,
    });
  },
};

export default MessageController;

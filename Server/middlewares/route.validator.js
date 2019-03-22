const MessageValidator = {
  create(req, res, next) {
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
    return next();
  },
};

export default MessageValidator;

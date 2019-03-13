import dummyDatabase from '../utils/dummyDatabase';

class Message {
  constructor() {
    this.id = Number;
    this.senderId = Number;
    this.receiverId = Number;
    this.createdOn = Date;
    this.subject = String;
    this.message = String;
    this.parentMessageId = Number;
    this.status = String;
  }

  create(data) {
    this.message = {};
    const message = new Message();
    if (!dummyDatabase.messages[0]) {
      message.id = 1;
    } else {
      message.id = dummyDatabase.messages[dummyDatabase.messages.length - 1].id + 1;
    }
    message.createdOn = data.createdOn;
    message.subject = data.subject;
    message.message = data.message;
    message.parentMessageId = data.parentMessageId;
    message.status = data.status;
    dummyDatabase.messages.push(message);
    return message;
  }

  getAll() {
    this.message = {};
    return dummyDatabase.messages;
  }

  getOne(id) {
    this.message = dummyDatabase.messages.find(message => message.id === parseInt(id, 10));
    return this.message;
  }
}

export default new Message();

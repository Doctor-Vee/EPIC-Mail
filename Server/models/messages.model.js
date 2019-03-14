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

  getSent() {
    this.message = dummyDatabase.messages.filter(message => message.status === 'sent');
    return this.message;
  }

  getUnread() {
    this.message = dummyDatabase.messages.filter(message => message.status !== 'draft' && message.status !== 'read');
    return this.message;
  }

  delete(id) {
    this.message = dummyDatabase.messages.find(message => message.id === parseInt(id, 10));
    if (!this.message) { return 0; }
    const index = dummyDatabase.messages.indexOf(this.message);
    return dummyDatabase.messages.splice(index, 1);
  }
}

export default new Message();

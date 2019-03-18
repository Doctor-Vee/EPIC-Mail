import bcrypt from 'bcrypt';
import dummyDatabase from '../utils/dummyDatabase';

class User {
  constructor() {
    this.id = Number;
    this.email = String;
    this.firstName = String;
    this.lastName = String;
    this.password = String;
  }

  create(data) {
    this.user = {};
    const user = new User();
    if (!dummyDatabase.users[0]) {
      user.id = 1;
    } else {
      user.id = dummyDatabase.users[dummyDatabase.users.length - 1].id + 1;
    }
    user.email = data.email;
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.password = bcrypt.hashSync(data.password, 10);
    dummyDatabase.users.push(user);
    return user;
  }

  login(data) {
    this.user = dummyDatabase.users.find(user => user.email === data.email);
    return this.user;

  }
}

export default new User();

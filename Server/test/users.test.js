import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Test user signup route', () => {
  it('should return an error if the user does not exist', (done) => {
    const user = {
      email: 'footballer@epicmail.com',
      password: 'safe32',
    };
    chai
      .request(server)
      .post('/api/v1/auth/login')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(404);
        expect(res.body.error).to.eql('User does not exist');
        done();
      });
  });
  it('should return 404 on wrong api call', (done) => {
    chai
      .request(server)
      .post('/api/v1/users/signup')
      .end((err, res) => {
        expect(res.status).to.eql(404);
        done();
      });
  });
  it('should return an error if the first name is blank', (done) => {
    const user = {
      firstName: '',
      lastName: 'Valdes',
      email: 'footballer@epicmail.com',
      password: 'safe32',
    };
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.error).to.eql('First Name is required');
        done();
      });
  });
  it('should return an error if the last name is blank', (done) => {
    const user = {
      firstName: 'Victor',
      lastName: '',
      email: 'footballer@epicmail.com',
      password: 'safe32',
    };
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.error).to.eql('Last Name is required');
        done();
      });
  });
  it('should return an error if non-alphabets are included in the name', (done) => {
    const user = {
      firstName: 'Victor360',
      lastName: 'Valdes',
      email: 'footballer@epicmail.com',
      password: 'safe32',
    };
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.error).to.eql('Names must contain only alphabets');
        done();
      });
  });
  it('should return an error if a name is less than 2 characters', (done) => {
    const user = {
      firstName: 'Victor',
      lastName: 'V',
      email: 'footballer@epicmail.com',
      password: 'safe32',
    };
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.error).to.eql('Names cannot be less than 2 characters');
        done();
      });
  });
  it('should return an error if the email is blank', (done) => {
    const user = {
      firstName: 'Victor',
      lastName: 'Valdes',
      email: '',
      password: 'safe32',
    };
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.error).to.eql('Email is required');
        done();
      });
  });
  it('should return an error if the email is invalid', (done) => {
    const user = {
      firstName: 'Victor',
      lastName: 'Valdes',
      email: 'foot@baller@epicmail.com',
      password: 'safe32',
    };
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.error).to.eql('Enter a valid email address');
        done();
      });
  });
  it('should return an error if the password is blank', (done) => {
    const user = {
      firstName: 'Victor',
      lastName: 'Valdes',
      email: 'footballer@epicmail.com',
      password: '',
    };
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.error).to.eql('Password is required');
        done();
      });
  });
  it('should return an error if the password entered is less than 6 characters', (done) => {
    const user = {
      firstName: 'Victor',
      lastName: 'Valdes',
      email: 'footballer@epicmail.com',
      password: 'safe2',
    };
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body).to.have.property('error').to.equal('Password must not be less than 6 characters');
        done();
      });
  });
  it('should create user and return 201 if all details were entered properly', (done) => {
    const user = {
      firstName: 'Victor',
      lastName: 'Valdes',
      email: 'footballer@epicmail.com',
      password: 'safe234',
    };
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(201);
        expect(res.body).to.deep.equal(
          {
            status: 201,
            data: res.body.data,
          },
        );
        done();
      });
  });
});

describe('Test user login route', () => {
  it('should return an error if the email is blank', (done) => {
    const user = {
      email: '',
      password: 'safe32',
    };
    chai
      .request(server)
      .post('/api/v1/auth/login')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.error).to.eql('Email is required');
        done();
      });
  });
  it('should return an error if the email is invalid', (done) => {
    const user = {
      email: 'foot@baller@epicmail.com',
      password: 'safe32',
    };
    chai
      .request(server)
      .post('/api/v1/auth/login')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.error).to.eql('Enter a valid email address');
        done();
      });
  });
  it('should return an error if the password is blank', (done) => {
    const user = {
      email: 'footballer@epicmail.com',
      password: '',
    };
    chai
      .request(server)
      .post('/api/v1/auth/login')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.error).to.eql('Password is required');
        done();
      });
  });

  it('should return an error if the password is not correct', (done) => {
    const user = {
      email: 'chidinma@gmail.com',
      password: 'safe32',
    };
    chai
      .request(server)
      .post('/api/v1/auth/login')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(401);
        expect(res.body.error).to.eql('Wrong password');
        done();
      });
  });
  it('should login user and return 200 if all details were entered properly and if user exists', (done) => {
    const user = {
      email: 'chidinma@gmail.com',
      password: 'charamie',
    };
    chai
      .request(server)
      .post('/api/v1/auth/login')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.eql(200);
        expect(res.body).to.deep.equal(
          {
            status: 200,
            data: res.body.data,
          },
        );
        done();
      });
  });
});
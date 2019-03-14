import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Test Server', () => {
  it('should return display a welcome message at default route', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.eql(200);
        done();
      });
  });
});

describe('Test user signup route', () => {
  it('should return 404 on wrong api call', (done) => {
    chai
      .request(server)
      .post('/api/v1/users')
      .end((err, res) => {
        expect(res.status).to.eql(404);
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
        done();
      });
  });
  it('should return 400 if the password entered is less than 6 characters', (done) => {
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
        // expect(res.send).to.eql('password must not be less than 6 characters');
        // .json({ password: 'password must not be less than 6 characters' });
        // expect(res.status(400).send).to.eql('password must not be less than 6 characters');
        expect(res.status).to.eql(400);
        expect(res).to.have.property('error');
        done();
      });
  });
});

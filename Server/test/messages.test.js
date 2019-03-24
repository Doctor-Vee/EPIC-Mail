import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

chai.use(chaiHttp);
const {
  expect,
} = chai;

describe('Test message create route', () => {
  it('should return 404 on wrong api call', (done) => {
    chai
      .request(server)
      .post('/api/v1/users/messages')
      .end((err, res) => {
        expect(res.status).to.eql(404);
        done();
      });
  });
  it('should return status 400 and an error message when id is not a number', (done) => {
    chai
      .request(server)
      .get('/api/v1/messages/a/inbox')
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.error).to.eql('The id can only be a number');
        done();
      });
  });
});
describe('Test message create route', () => {
  it('should return an error if subject field is blank', (done) => {
    const message = {
      receiverId: null,
      subject: '',
      message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book`,
    };
    chai
      .request(server)
      .post('/api/v1/messages')
      .send(message)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.error).to.eql('Subject field cannot be empty');
        done();
      });
  });
  it('should return an error if message field is blank', (done) => {
    const message = {
      receiverId: null,
      subject: 'Hello Victor',
      message: '',
    };
    chai
      .request(server)
      .post('/api/v1/messages')
      .send(message)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.error).to.eql('Message field cannot be empty');
        done();
      });
  });
});

describe('Test inbox route', () => {
  it('should return status 200 and return details when the inbox route is called', (done) => {
    chai
      .request(server)
      .get('/api/v1/messages/1/inbox')
      .end((err, res) => {
        expect(res.status).to.eql(200);
        done();
      });
  });
});

describe('Test sent route', () => {
  it('should return status 200 and return details when the sent route is called', (done) => {
    chai
      .request(server)
      .get('/api/v1/messages/1/sent')
      .end((err, res) => {
        expect(res.status).to.eql(200);
        done();
      });
  });
});

describe('Test unread route', () => {
  it('should return status 200 and return details when the unread route is called', (done) => {
    chai
      .request(server)
      .get('/api/v1/messages/1/unread')
      .end((err, res) => {
        expect(res.status).to.eql(200);
        done();
      });
  });
});

describe('Test delete route', () => {
  it('should return status 200 and return details when the delete route is called', (done) => {
    chai
      .request(server)
      .delete('/api/v1/messages/1')
      .end((err, res) => {
        expect(res.status).to.eql(200);
        done();
      });
  });
});

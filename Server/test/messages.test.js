import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

chai.use(chaiHttp);
const { expect } = chai;

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
  it('should create message and return 201 if all details were entered properly', (done) => {
    const message = {
      receiverId: null,
      createdOn: new Date().toString(),
      subject: 'Hello Victor',
      message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book`,
    };
    chai
      .request(server)
      .post('/api/v1/messages')
      .send(message)
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

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
  it('should return status of 200 and return all messages when message route is selected', (done) => {
    chai
      .request(server)
      .get('/api/v1/messages/all')
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
  it('should return status of 200 and return all received messages when message route is selected', (done) => {
    chai
      .request(server)
      .get('/api/v1/messages')
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
  it('should return status of 200 and return a single received messages when the single message route is selected', (done) => {
    const message = {
      id: 1,
    };
    chai
      .request(server)
      .get(`/api/v1/messages/${message.id}`)
      .end((err, res) => {
        expect(res.status).to.eql(200);
        expect(res.body).to.deep.equal(
          {
            status: 200,
            data: {
              id: 1,
              senderId: null,
              receiverId: null,
              createdOn: 'March 15th, 2019',
              subject: 'Hello Victor',
              message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
              parentMessageId: null,
              status: 'draft',
            },
          },
        );
        done();
      });
  });
  it('should return status of 200 and return all unread messages when unread message route is selected', (done) => {
    chai
      .request(server)
      .get('/api/v1/messages/unread')
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
  it('should return status of 200 and return all sent messages when sent message route is selected', (done) => {
    chai
      .request(server)
      .get('/api/v1/messages/sent')
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
  it('should return status of 200 and return a single received messages when the single message route is selected', (done) => {
    const message = {
      id: 1,
    };
    chai
      .request(server)
      .delete(`/api/v1/messages/${message.id}`)
      .end((err, res) => {
        expect(res.status).to.eql(200);
        expect(res.body).to.deep.equal(
          {
            status: 'success',
            data: [
              {
                id: 1,
                senderId: null,
                receiverId: null,
                createdOn: 'March 15th, 2019',
                subject: 'Hello Victor',
                message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                parentMessageId: null,
                status: 'draft',
              },
            ]
          },
        );
        done();
      });
  });
});

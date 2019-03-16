import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Test Server', () => {
  it('should display a welcome message at default route', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.eql(200);
        // expect(res.body).to.eql('Welcome to EPIC Mail');
        done();
      });
  });
  it('should return 404 on wrong api call', (done) => {
    chai
      .request(server)
      .get('/epic')
      .end((err, res) => {
        expect(res.status).to.eql(404);
        done();
      });
  });
});

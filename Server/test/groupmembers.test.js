import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

chai.use(chaiHttp);
const {
  expect,
} = chai;

describe('Test groupmember create route', () => {
  it('should return an error if group name is blank', (done) => {
    const group = {
      name: '',
      description: 'We do great things',
    };
    chai
      .request(server)
      .post('/api/v1/groupmembers')
      .send(group)
      .end((err, res) => {
        expect(res.status).to.eql(400);
        expect(res.body.error).to.eql('Group Name cannot be blank');
        done();
      });
  });
});

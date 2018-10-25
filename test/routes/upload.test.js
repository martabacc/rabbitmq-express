process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/index');
const should = chai.should();


chai.use(chaiHttp);

describe('Upload', () => {
  it('should return Hello', (done) => {
    chai.request(server)
        .post('/upload')
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.equal('Not ready yet');
          done();
        });
  });
});

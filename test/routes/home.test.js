process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/index');
const should = chai.should();


chai.use(chaiHttp);

describe('Home', () => {
  it('should return Hello', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.deep.equal({
            message: 'Hello From ImageCompacter service'
          });
          done();
        });
  });
});

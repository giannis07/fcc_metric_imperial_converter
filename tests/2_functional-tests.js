const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test('10L: GET request to /api/convert', function(done) {
        chai.request(server)
        .get('/api/convert')
        .query({ input: '10L' })
        .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.status, 200);

            assert.property(res.body, 'initNum');
            assert.property(res.body, 'initUnit');
            assert.property(res.body, 'returnNum');
            assert.property(res.body, 'returnUnit');
            assert.property(res.body, 'string');

            assert.equal(res.body.initNum, 10);
            assert.equal(res.body.initUnit, 'L');
            assert.approximately(res.body.returnNum, 10 * 0.264172, 0.00001);
            assert.equal(res.body.returnUnit, 'gal');
            done();
        });
    });

    test('invalid input 32g: GET request to /api/convert', function(done) {
        chai.request(server)
          .get('/api/convert')
          .query({ input: '32g' })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'invalid unit');
            done();
        });
    });

    test('invalid number 3/7.2/4kg: GET request to /api/convert', function(done) {
        chai.request(server)
          .get('/api/convert')
          .query({ input: '3/7.2/4kg' })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, 'invalid number');
            done();
        });
    });


  test('invalid number AND unit  3/7.2/4kilomegagram: GET request to /api/convert', function(done) {
    chai.request(server)
      .get('/api/convert')
      .query({ input: '3/7.2/4kilomegagram' })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'invalid number and unit');
        done();
      });
  });

  test('no number kg: GET request to /api/convert', function(done) {
    chai.request(server)
      .get('/api/convert')
      .query({ input: 'kg' })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'initNum');
        assert.property(res.body, 'initUnit');
        assert.property(res.body, 'returnNum');
        assert.property(res.body, 'returnUnit');
        assert.property(res.body, 'string');
        assert.equal(res.body.initNum, 1);  // Default number is 1
        assert.equal(res.body.initUnit, 'kg');
        assert.approximately(res.body.returnNum, 1 * 2.20462, 0.00001); // 1 kilogram to pounds
        assert.equal(res.body.returnUnit, 'lbs');
        done();
      });
  });
});
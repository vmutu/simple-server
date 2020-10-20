var expect = require('chai').expect;
var request = require('request');
var hostname = 'localhost';
var port = '8090';

it('Index page content', function(done) {
  request(`http://${hostname}:${port}`, function(error, res, body) {
    expect(body).to.equal('Big Hello to the whole World!');
    done();
  });
});

it('Index page status', function(done) {
  request(`http://${hostname}:${port}`, function(error, res, body) {
    expect(res.statusCode).to.equal(200);
    done();
  });
});


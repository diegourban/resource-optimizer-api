var request = require("supertest");
require("./mocha.env");

describe("loading express", function () {
  var server;
  beforeEach(function () {
    server = require("../server");
  });

  afterEach(function () {
    server.close();
  });

  it("responds to /api/minify", function testSlash(done) {
  request(server)
    .get("/")
    .expect(200, done);
  });

  it("404 everything else", function testPath(done) {
    request(server)
      .post("/foo/bar")
      .expect(404, done);
  });
});

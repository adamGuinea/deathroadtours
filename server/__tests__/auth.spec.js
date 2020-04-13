const request = require("supertest");
const { matchers } = require("jest-json-schema");
const app = require("../index");
const AuthSchema = require("../schemas/AuthSchema");

let token;

beforeAll((done) => {
  expect.extend(matchers);
  request(app)
    .post("/api/auth/signin")
    .send({
      email: "user@gmail.com",
      password: "user",
    })
    .end((err, response) => {
      token = response.body.token;
      done();
    });
});

describe("Post Endpoints", () => {
  it("logs a user in", async (done) => {
    const { statusCode, body } = await request(app)
      .post("/api/auth/signin")
      .send({
        email: "user@gmail.com",
        password: "user",
      });
    expect(statusCode).toEqual(200);
    expect(body).toMatchSchema(AuthSchema);
    done();
  });

  it("should request credentials", async (done) => {
    const expected =
      '{"error":{"message":"User validation failed: email: Path `email` is required., username: Path `username` is required., password: Path `password` is required."}}';

    const { statusCode, text } = await request(app)
      .post("/api/auth/signup")
      .send({
        email: "",
        username: "",
        password: "",
      });
    expect(statusCode).toEqual(400);
    expect(text).toEqual(expected);
    done();
  });

  it("fetches messages", async (done) => {
    const { statusCode, body} = await request(app)
    .get('/api/messages')
    .set('Authorization', `Bearer ${token}`)
    expect(statusCode).toEqual(200)
    done();
  });
});

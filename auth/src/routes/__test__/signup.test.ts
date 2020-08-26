import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'testtest.com',
      password: 'password',
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'testtest.com',
      password: 'pa',
    })
    .expect(400);
});

it('returns a 400 with missing credentials', async () => {
  return request(app).post('/api/users/signup').send({}).expect(400);
});

it('returns a 400 with missing credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'testtest.com',
    })
    .expect(400);
  await request(app)
    .post('/api/users/signup')
    .send({
      password: 'password',
    })
    .expect(400);
});

it('returns a 400 if email already exists', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(400);
});

// IMPORTANT : since we set the secure property to true in app.ts when setting the cookie header
// it means that we can only access its content over a https connection
// by default, supertest makes requests via http therefore this test would always fail even though the code is running correctly
// to bypass this, we set the secure property when setting the cookie header to true or false based on the running environment
// if process.env is test, then secure property will be false, enabling this test to pass
it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});

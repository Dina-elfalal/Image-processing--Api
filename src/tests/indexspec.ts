//  test the main endpoint
import supertest from 'supertest';

//import app from main index server
import app from '../index';

const request = supertest(app);

// test main endpoint response
describe('Test main endpoint responses', () => {
  it('gets main endpoint', async (done) => {
    const result = await request.get('/');
    expect(result.status).toBe(200);
    done();
  });
});


// test images route response
describe('Test images route responses', () => {
  it ('gets images route', async (done) => {
    const result = await request.get(
      '/api/images?name=fjord&width=300&height=200'
    );
    expect(result.status).toBe(200);
    done();
  });
});


// test api route response
describe('api responses', () => {
  it('gets route of api', async (done) => {
    const result = await request.get('/api');
    expect(result.status).toBe(200);
    done();
  });
});

// avoid jest open handle error

// afterAll(async () => {
// 	await new Promise(resolve => setTimeout(() => resolve(), 500)); 
// });
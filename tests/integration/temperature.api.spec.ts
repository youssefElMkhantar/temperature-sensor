import request from 'supertest';
import app from '../../src/infrastructure/http/server.js';

describe('Temperature API', () => {
  it('GET /temperature should return temperature and state', async () => {
    const res = await request(app).get('/temperature');

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('temperature');
    expect(res.body).toHaveProperty('state');
    expect(['HOT', 'WARM', 'COLD']).toContain(res.body.state);
  });

  it('GET /temperature/history should return an array', async () => {
    const res = await request(app).get('/temperature/history');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

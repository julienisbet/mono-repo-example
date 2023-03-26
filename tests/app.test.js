const { setupDb } = require('./utils');
// const request = require('supertest');
// const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(setupDb);

  it('example test - delete me!', async () => {
    expect(1).toBe(1);
  });
});

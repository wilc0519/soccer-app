import app from '../../app';
import request from 'supertest';
import factories from '../../factories';
import { Match } from '../../models';
import { StatusCodes } from 'http-status-codes';

const server = app.listen();

beforeAll(() => jest.useFakeTimers());
afterAll(() => server.close());

describe('MatchController', () => {
  describe('List', () => {
    test('should list position table', async () => {
      const numberOfMatches = 2;
      const matches = factories.match.buildList(numberOfMatches);

      await Promise.all(
        matches.map(async (data) => (await Match.query().insert(data)).id)
      );

      const response = await request(server).get('/matches/position');

      expect(response.status).toBe(StatusCodes.OK);
      expect(response.body.length).toBeGreaterThan(0);
    });
    
  });
});

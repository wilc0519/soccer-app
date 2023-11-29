import app from '../../app';
import request from 'supertest';
import factories from '../../factories';
import { Player } from '../../models';
import { StatusCodes } from 'http-status-codes';

const server = app.listen();

beforeAll(() => jest.useFakeTimers());
afterAll(() => server.close());

describe('PlayerController', () => {
  describe('List', () => {
    test('should list all players', async () => {
      const numberOfPlayers = 6;
      const players = factories.player.buildList(numberOfPlayers);

      await Promise.all(
        players.map(async (data) => (await Player.query().insert(data)).id)
      );
      const response = await request(server).get('/players');

      expect(response.status).toBe(StatusCodes.OK);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
});

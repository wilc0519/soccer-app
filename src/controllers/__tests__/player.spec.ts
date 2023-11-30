import app from '../../app';
import request from 'supertest';
import factories from '../../factories';
import { Player, Team } from '../../models';
import { StatusCodes } from 'http-status-codes';

const server = app.listen();

beforeAll(() => jest.useFakeTimers());
afterAll(() => server.close());

describe('PlayerController', () => {
  describe('List', () => {
    test('should list all players', async () => {
      const numberOfTeams = 6;
      const teams = factories.team.buildList(numberOfTeams);

      await Promise.all(
        teams.map(async (data) => (await Team.query().insert(data)).id)
      );
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

  describe('Get', () => {
    test('Given an id, should get a player correctly', async () => {
      const player = factories.player.build();
      const { id } = await Player.query().insert(player);

      const response = await request(server).get(`/players/${id}`);

      expect(response.status).toBe(StatusCodes.OK);
      expect(response.body.id).toBe(id);
    });
    test("Given an id, should return 404 if player doesn't exist", async () => {
      const response = await request(server).get('/players/6666');

      expect(response.status).toBe(StatusCodes.NOT_FOUND);
    });
  });

  describe('Create', () => {
    test('should create a new player correctly', async () => {
      const player = factories.player.build();

      const response = await request(server).post('/players').send(player);

      expect(response.status).toBe(StatusCodes.CREATED);
      expect(response.body.name).toBe(player.name);
    });
  });
});

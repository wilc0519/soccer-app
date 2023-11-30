import app from '../../app';
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import { Team } from '../../models';
import factories from '../../factories';

const server = app.listen();

beforeAll(() => jest.useFakeTimers());
afterAll(() => server.close());

describe('TeamController', () => {
  describe('List', () => {
    test('should list all teams', async () => {
      const sampleSize = 4;
      const teams = factories.team.buildList(sampleSize);

      await Promise.all(
        teams.map(async (data) => (await Team.query().insert(data)).id)
      );

      const response = await request(server).get('/teams');

      expect(response.status).toBe(StatusCodes.OK);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
  describe('Get', () => {
    test('Given a id should get a team correctly', async () => {
      const team = factories.team.build();
      const { id } = await Team.query().insert(team);

      const response = await request(server).get(`/teams/${id}`);

      expect(response.status).toBe(StatusCodes.OK);
      expect(response.body.id).toBe(id);
    });
    test("Given a id should return 404 if team doesn't exist team", async () => {
      const response = await request(server).get(`/teams/6666`);
      expect(response.status).toBe(StatusCodes.NOT_FOUND);
    });
  });
});

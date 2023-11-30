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

  describe('Create', () => {
    test('should create a new team correctly', async () => {
      const team = factories.team.build();

      const response = await request(server).post('/teams').send(team);

      expect(response.status).toBe(StatusCodes.CREATED);
      expect(response.body.name).toBe(team.name);
    });
  });

  describe('Update', () => {
    test('shoud update a team correctly', async () => {
      const team = factories.team.build();
      const postResponse = await request(server).post('/teams').send(team);
      expect(postResponse.status).toBe(StatusCodes.CREATED);
      const newTeamData = factories.team.build();
      const putResponse = await request(server)
        .put(`/teams/${postResponse.body.id}`)
        .send(newTeamData);

      expect(putResponse.status).toBe(StatusCodes.OK);
    });
    test('shoud return status 404 is team does not exist', async () => {
      const response = await request(server).put('/teams/6666');
      expect(response.status).toBe(StatusCodes.NOT_FOUND);
    });
  });

  describe('Delete', () => {
    test('should delete a team correctly', async () => {
      const team = factories.team.build();

      const { id } = await Team.query().insert(team);

      const getResponse = await request(server).get(`/teams/${id}`);
      expect(getResponse.body.id).toBe(id);

      const deleteResponse = await request(server).delete(`/teams/${id}`);
      expect(deleteResponse.status).toBe(StatusCodes.NO_CONTENT);
    });

    test("should return 404 if team doesn't exists", async () => {
      const response = await request(server).delete(`/teams/6666`);
      expect(response.status).toBe(StatusCodes.NOT_FOUND);
    });
  });
});

import { Request, Response } from 'express';
import { Team } from '../models';
import { StatusCodes } from 'http-status-codes';
import { Id } from 'objection';

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const teams = await Team.query();
  return res.status(StatusCodes.OK).json(teams);
};

const get = async (req: Request, res: Response): Promise<Response> => {
  const id: Id = req.params.id;
  const team = await Team.query().findById(id);
  if (!team) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'team not found' });
  }
  return res.status(StatusCodes.OK).json(team);
};

const create = async (req: Request, res: Response): Promise<Response> => {
  const team = await Team.query().insert(req.body);
  return res.status(StatusCodes.CREATED).json(team);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const id: Id = req.params.id;
  const team = await Team.query().findById(id).patch(req.body);
  if (!team) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'team not found' });
  }
  return res.sendStatus(StatusCodes.OK);
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: Id = req.params.id;
  const team = await Team.query().findById(id);
  if (!team) {
    return res.sendStatus(StatusCodes.NOT_FOUND);
  }
  await Team.query().deleteById(id);
  return res.sendStatus(StatusCodes.NO_CONTENT);
};

export const TeamController = {
  getAll,
  get,
  create,
  update,
  remove,
};

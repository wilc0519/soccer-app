import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Player } from '../models';
import { Id } from 'objection';

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const players = await Player.query();
  return res.status(StatusCodes.OK).json(players);
};

const get = async (req: Request, res: Response): Promise<Response> => {
  const id: Id = req.params.id;
  const player = await Player.query().findById(id);
  if (!player) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'player not found' });
  }
  return res.status(StatusCodes.OK).json(player);
};

const create = async (req: Request, res: Response): Promise<Response> => {
  const player = await Player.query().insert(req.body);
  return res.status(StatusCodes.CREATED).json(player);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const id: Id = req.params.id;
  const player = await Player.query().findById(id).patch(req.body);
  if (!player) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'player not found' });
  }
  return res.sendStatus(StatusCodes.OK);
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: Id = req.params.id;
  const player = await Player.query().findById(id);
  if (!player) {
    return res.sendStatus(StatusCodes.NOT_FOUND);
  }
  await Player.query().deleteById(id);
  return res.sendStatus(StatusCodes.NO_CONTENT);
};

export const PlayerController = {
  getAll,
  get,
  create,
  update,
  remove,
};

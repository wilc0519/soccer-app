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

export const PlayerController = {
  getAll,
  get,
};

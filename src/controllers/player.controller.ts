import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Player } from '../models';

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const players = await Player.query();
  return res.status(StatusCodes.OK).json(players);
};

export const PlayerController = {
  getAll,
};

import { Request, Response } from 'express';
import { Match } from '../models/match.model';
import { StatusCodes } from 'http-status-codes';
import { positionTableRes } from '../services/positionTable';

const getPositionTable = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const matches = await Match.query();
  if(!matches){
    return res.status(StatusCodes.NOT_FOUND).json({message: 'Matches not found'})
  }
  const positionTeam = positionTableRes(matches);
  return res.status(StatusCodes.OK).json(positionTeam);
};

export const MatchController = {
  getPositionTable,
};

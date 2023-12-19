import { Request, Response } from 'express';
import { Match } from '../models/match.model';
import { StatusCodes } from 'http-status-codes';

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const matches = await Match.query();
  return res.json(matches);
};

const getPositionTable = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const matches = await Match.query();
  const positionTable:any = {};

  matches.forEach((match) => {
    UpdatePositionTable(
      positionTable,
      match.nameLocalTeam,
      match.localTeamGoals,
      match.awayTeamGoals
    );
    UpdatePositionTable(
      positionTable,
      match.nameTeamVisit,
      match.awayTeamGoals,
      match.localTeamGoals
    );
  });
  const resumenTable: any = [];
  Object.keys(positionTable).forEach((team) => {
    resumenTable.push({
      team,
      points: positionTable[team].points,
      matchesPlayed: positionTable[team].matchesPlayed,
      golsScored: positionTable[team].goalsScored,
      golsRecived: positionTable[team].goalsReceived,
      goalDiference: positionTable[team].goalDiference,
    });
  });

  resumenTable.sort((a: any, b: any) => b.points - a.points);
  function UpdatePositionTable(
    positionTable: any,
    nameTeam: string,
    goalsScored: number,
    goalsReceived: number
  ) {
    if (!positionTable[nameTeam]) {
      positionTable[nameTeam] = {
        points: 0,
        matchesPlayed: 0,
        goalsScored: 0,
        goalsReceived: 0,
        goalDiference: 0,
      };
    }
    positionTable[nameTeam].partidosJugados++;
    positionTable[nameTeam].goalsScored += goalsScored;
    positionTable[nameTeam].goalsReceived += goalsReceived;
    positionTable[nameTeam].goalDiference += goalsScored - goalsReceived;
    if (goalsScored > goalsReceived) {
      positionTable[nameTeam].points += 3;
    } else if (goalsScored === goalsReceived) {
      positionTable[nameTeam].points += 1;
    }
  }

  return res.status(StatusCodes.OK).json(resumenTable);
};
export const MatchController = {
  getAll,
  getPositionTable,
};

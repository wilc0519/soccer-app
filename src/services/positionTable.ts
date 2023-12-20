import { Match } from '../models';

export const positionTableRes = (matches: Match[]) => {
  const positionTable: any = {};

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
      tiedMatches: positionTable[team].tiedMatches,
      wonMatches: positionTable[team].wonMatches,
      lostMatches: positionTable[team].lostMatches,
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
        tiedMatches: 0,
        wonMatches: 0,
        lostMatches: 0,
      };
    }
    positionTable[nameTeam].matchesPlayed++;
    positionTable[nameTeam].goalsScored += goalsScored;
    positionTable[nameTeam].goalsReceived += goalsReceived;
    positionTable[nameTeam].goalDiference += goalsScored - goalsReceived;

    if (goalsScored > goalsReceived) {
      positionTable[nameTeam].points += 3;
      positionTable[nameTeam].wonMatches++;
    } else if (goalsScored === goalsReceived) {
      positionTable[nameTeam].points += 1;
      positionTable[nameTeam].tiedMatches++;
    } else {
      positionTable[nameTeam].lostMatches++;
    }
  }

  console.log(positionTable)
  return resumenTable;
};

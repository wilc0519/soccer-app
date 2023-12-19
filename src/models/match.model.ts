import Base from './base';
import { Id } from 'objection';

export class Match extends Base {
  id!: Id;
  date!: Date;
  time!: string;
  nameLocalTeam!: string;
  nameTeamVisit!: string;
  localTeamGoals!: number;
  awayTeamGoals!: number;
  static tableName = 'match';
}

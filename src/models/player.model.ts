import Base from './base';
import { Id, RelationMappings, Model } from 'objection';
import { Team } from './team.model';
export class Player extends Base {
  id!: Id;
  name!: string;
  nationality!: string;
  identification_number!: string;
  birthdate!: Date;
  team_id!: number;

  static tableName = 'player';

  static get relationMappings(): RelationMappings {
    return {
      team: {
        relation: Model.HasOneRelation,
        modelClass: Team,
        join: {
          from: 'player.team_id',
          to: 'team.id',
        },
      },
    };
  }
}

import Base from './base';
import { Id, RelationMappings, Model } from 'objection';
import { Player } from './player.model';

export class Team extends Base {
  id!: Id;
  name!: string;
  fundation_date!: Date;

  static tableName = 'team';
  static get relationMappings(): RelationMappings {
    return {
      team: {
        relation: Model.BelongsToOneRelation,
        modelClass: Player,
        join: {
          from: 'team.id',
          to: 'player.team_id',
        },
      },
    };
  }
}

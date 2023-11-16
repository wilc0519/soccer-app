import Base from "./base"
import { Id, RelationMappings, Model } from "objection";
import { Team } from "./team.model";
export class Player extends Base {
    id!: Id;
    name!: string;
    nationality!: string;
    identificationDocument!: string;
    birthday! :Date;
    teamId!: Number


    static tableName: "player";

    static get relationMappings():RelationMappings{
        return{
            team: {
                relation: Model.HasOneRelation,
                modelClass: Team,
                join: {
                    from: 'player.teamId',
                    to: 'team.id'
                }

            }
        }
    }


}
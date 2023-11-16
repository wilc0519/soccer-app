import Base from "./base";
import { Id, RelationMappings, Model} from "objection";

export class Team extends Base{
    id!: Id;
    name!: string;
    fundation_date!: Date;

    static tableName = 'team';

    static get relationMappings(): RelationMappings {
        return {

        };
      }
}
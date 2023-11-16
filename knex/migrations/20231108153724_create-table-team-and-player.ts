import { Knex } from "knex";
import { Player, Team } from "../../src/models";


export const up = (knex: Knex): Promise<void> => 
     knex.schema
    .createTable(Team.tableName, (table: Knex.TableBuilder) => {
        table.increments();
        table.timestamps(true, true);
        table.string('name').notNullable();
        table.date('fundationDate');


    })
    .createTable(Player.tableName, (table: Knex.TableBuilder) => {
        table.increments();
        table.timestamps(true, true);
        table.string('name').notNullable();
        table.string('nationality');
        table.string('identificationDocument').notNullable();
        table.integer('teamId').references('id').inTable(Team.tableName)


    });

export const down = (knex: Knex): Promise<void> => 
    knex.schema
    .dropTable(Team.tableName)
    .dropTable(Player.tableName);

   

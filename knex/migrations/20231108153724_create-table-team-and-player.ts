import { Knex } from "knex";

export const up = (knex: Knex): Promise<void> =>
    knex.schema
        .createTable('team', (table: Knex.TableBuilder) => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.date('fundationDate').nullable();
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())
        });
    
export const down = (knex: Knex): Promise<void> =>
    knex.schema
        .dropTable('team')



import { Knex } from 'knex';

export const up = (knex: Knex): Promise<void> =>
  knex.schema.createTable('player', (table: Knex.TableBuilder) => {
    table.increments().primary();
    table.string('name').notNullable();
    table.string('nationality').nullable();
    table.string('identificationNumber').notNullable();
    table.date('birthdate').notNullable();
    table.integer('teamId').references('id').inTable('team');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });

export const down = (knex: Knex): Promise<void> =>
  knex.schema.dropTable('player');

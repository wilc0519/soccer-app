import { config } from './src/config';
import * as path from 'path';
import objection from 'objection';

const defaultKnexConfig = {
  client: 'pg',
  migrations: {
    tableName: 'knex_migrations',
    directory: path.resolve('knex/migrations'),
  },
  seeds: {
    directory: path.resolve('knex/seeds'),
  },
  ...objection.knexSnakeCaseMappers(),
  useNullAsDefault: true,
};

export default {
  development: {
    ...defaultKnexConfig,
    connection: {
      host: config.dbHost,
      port: config.dbPort,
      user: config.dbUser,
      database: config.dbName,
      password: config.dbPassword,
      },
  },
  test: {
    ...defaultKnexConfig,
    connection: { 
      host: config.dbHost,
      port: config.dbPort,
      user: config.dbUser,
      database: config.dbName,
      password: config.dbPassword,
     },
  },
};

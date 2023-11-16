import * as dotenv from 'dotenv';

dotenv.config();

enum NodeEnv {
  TEST = 'test',
  DEV = 'development',
}

interface Env {
  env: NodeEnv;
  dbUser: string;
  dbHost: string;
  dbName: string;
  dbPassword: string;
  dbPort: number;
  knexDebug: boolean;
  port: number;
  defaultPage: number;
  defaultPageSize: number;
}

export const config: Env = {
  env: (process.env.NODE_ENV as NodeEnv) || NodeEnv.DEV,
  dbUser: process.env.DB_USER || 'postgres',
  dbHost: process.env.DB_HOST || 'localhost',
  dbName: process.env.DB_NAME || 'soccerdb',
  dbPassword: process.env.DB_PASSWORD || 'postgres',
  dbPort: Number(process.env.DB_PORT) || 5432,
  knexDebug: process.env.KNEX_DEBUG === 'true',
  port: Number(process.env.APP_PORT) || 5000,
  defaultPage: 0,
  defaultPageSize: 10,
};


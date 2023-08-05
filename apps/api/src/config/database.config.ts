import { registerAs } from '@nestjs/config';
import { APP_CONFIG } from './app.config';

export const databaseConfig = registerAs(APP_CONFIG.DB, () => ({
  DB_HOST: process.env.DATABASE_HOST,
  DB_POST: process.env.DATABASE_PORT || 5432,
}));

export interface DatabaseConfig {
  DB_HOST: string;
  DB_POST: number;
}

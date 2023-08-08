export default () => ({
  // DB
  DB_HOST: process.env.DATABASE_HOST,
  DB_POST: process.env.DATABASE_PORT || 5432,
  // SERVER
  SERVER_PORT: parseInt(process.env.PORT, 10) || 3000,
  SERVER_JWT_SECRET: process.env.JWT_SECRET,
});

export interface AppConfig {
  DB_HOST: string;
  DB_POST: number;
  SERVER_PORT: number;
  SERVER_JWT_SECRET: string;
}
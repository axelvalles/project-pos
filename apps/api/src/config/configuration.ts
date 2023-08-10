export default () => ({
  // DB
  DB_HOST: process.env.DATABASE_HOST,
  DB_POST: process.env.DATABASE_PORT || 5432,
  // SERVER
  SERVER_PORT: parseInt(process.env.PORT, 10) || 3000,
  SERVER_JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  SERVER_JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
});

export interface AppConfig {
  DB_HOST: string;
  DB_POST: number;
  SERVER_PORT: number;
  SERVER_JWT_ACCESS_SECRET: string;
  SERVER_JWT_REFRESH_SECRET: string;
}

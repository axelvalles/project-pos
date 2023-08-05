import { registerAs } from '@nestjs/config';
import { APP_CONFIG } from './app.config';

export const serverConfig = registerAs(APP_CONFIG.SERVER, () => ({
  PORT: parseInt(process.env.PORT, 10) || 3000,
  API_KEY: process.env.API_KEY,
  JWT_SECRET: process.env.JWT_SECRET,
}));

export interface ServerConfig {
  PORT: number;
  API_KEY: string;
  JWT_SECRET: string;
}

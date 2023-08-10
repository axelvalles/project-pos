import * as Joi from 'joi';

export const enviroments = {
  dev: '.env',
  stag: '.env.staging',
  prod: '.env.prod',
};

export const enviromentSchema = Joi.object({
  PORT: Joi.number().required(),
  JWT_ACCESS_SECRET: Joi.string().required(),
  JWT_REFRESH_SECRET: Joi.string().required(),
});

export interface EnvironmentVariables {
  DB_HOST: string;
  DB_POST: number;
  SERVER_PORT: number;
  SERVER_JWT_ACCESS_SECRET: string;
  SERVER_JWT_REFRESH_SECRET: string;
}

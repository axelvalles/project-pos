import * as Joi from 'joi';

export const enviroments = {
  dev: '.env',
  stag: '.env.staging',
  prod: '.env.prod',
};

export const enviromentSchema = Joi.object({
  API_KEY: Joi.string().required(),
  PORT: Joi.number().required(),
  JWT_SECRET: Joi.string().required(),
});

export interface EnvironmentVariables {
  PORT: number;
  API_KEY: string;
  JWT_SECRET: string;
}

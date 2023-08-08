import * as Joi from 'joi';

export const enviroments = {
  dev: '.env',
  stag: '.env.staging',
  prod: '.env.prod',
};

export const enviromentSchema = Joi.object({
  PORT: Joi.number().required(),
  JWT_SECRET: Joi.string().required(),
});

export interface EnvironmentVariables {
  PORT: number;
  JWT_SECRET: string;
}

import * as Joi from 'joi';
export declare const enviroments: {
    dev: string;
    stag: string;
    prod: string;
};
export declare const enviromentSchema: Joi.ObjectSchema<any>;
export interface EnvironmentVariables {
    PORT: number;
    API_KEY: string;
    JWT_SECRET: string;
}

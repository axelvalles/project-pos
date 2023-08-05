"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviromentSchema = exports.enviroments = void 0;
const Joi = require("joi");
exports.enviroments = {
    dev: '.env',
    stag: '.env.staging',
    prod: '.env.prod',
};
exports.enviromentSchema = Joi.object({
    API_KEY: Joi.string().required(),
    PORT: Joi.number().required(),
    JWT_SECRET: Joi.string().required(),
});
//# sourceMappingURL=enviroments.js.map
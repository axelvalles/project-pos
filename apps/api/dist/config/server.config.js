"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverConfig = void 0;
const config_1 = require("@nestjs/config");
const app_config_1 = require("./app.config");
exports.serverConfig = (0, config_1.registerAs)(app_config_1.APP_CONFIG.SERVER, () => ({
    PORT: parseInt(process.env.PORT, 10) || 3000,
    API_KEY: process.env.API_KEY,
    JWT_SECRET: process.env.JWT_SECRET,
}));
//# sourceMappingURL=server.config.js.map
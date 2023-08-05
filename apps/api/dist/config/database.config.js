"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const config_1 = require("@nestjs/config");
const app_config_1 = require("./app.config");
exports.databaseConfig = (0, config_1.registerAs)(app_config_1.APP_CONFIG.DB, () => ({
    DB_HOST: process.env.DATABASE_HOST,
    DB_POST: process.env.DATABASE_PORT || 5432,
}));
//# sourceMappingURL=database.config.js.map
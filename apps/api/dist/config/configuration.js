"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    DB_HOST: process.env.DATABASE_HOST,
    DB_POST: process.env.DATABASE_PORT || 5432,
    SERVER_PORT: parseInt(process.env.PORT, 10) || 3000,
    SERVER_JWT_SECRET: process.env.JWT_SECRET,
});
//# sourceMappingURL=configuration.js.map
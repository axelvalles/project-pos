export declare const databaseConfig: (() => {
    DB_HOST: string;
    DB_POST: string | number;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    DB_HOST: string;
    DB_POST: string | number;
}>;
export interface DatabaseConfig {
    DB_HOST: string;
    DB_POST: number;
}

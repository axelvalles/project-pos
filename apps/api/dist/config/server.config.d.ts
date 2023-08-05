export declare const serverConfig: (() => {
    PORT: number;
    API_KEY: string;
    JWT_SECRET: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    PORT: number;
    API_KEY: string;
    JWT_SECRET: string;
}>;
export interface ServerConfig {
    PORT: number;
    API_KEY: string;
    JWT_SECRET: string;
}

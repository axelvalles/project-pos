declare const _default: () => {
    DB_HOST: string;
    DB_POST: string | number;
    SERVER_PORT: number;
    SERVER_JWT_SECRET: string;
};
export default _default;
export interface AppConfig {
    DB_HOST: string;
    DB_POST: number;
    SERVER_PORT: number;
    SERVER_JWT_SECRET: string;
}

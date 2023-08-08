import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { PayloadToken } from '../models/token.model';
import { AppConfig } from 'src/config/configuration';
declare const JwtStategy_base: new (...args: any[]) => Strategy;
export declare class JwtStategy extends JwtStategy_base {
    constructor(configService: ConfigService<AppConfig>);
    validate(payload: PayloadToken): Promise<PayloadToken>;
}
export {};

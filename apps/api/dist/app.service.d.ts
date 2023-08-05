import { ConfigService } from '@nestjs/config';
import { AppConfig } from './config';
export declare class AppService {
    private configService;
    constructor(configService: ConfigService<AppConfig>);
    getHello(): string;
}

import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './config';
export declare class AppService {
    private configService;
    constructor(configService: ConfigService<EnvironmentVariables>);
    getHello(): string;
}

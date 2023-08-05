import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfig, ServerConfig } from './config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService<AppConfig>) {}

  getHello(): string {
    const dbConfig = this.configService.get<ServerConfig>('server');
    console.log(dbConfig);

    return 'Hello World!';
  }
}

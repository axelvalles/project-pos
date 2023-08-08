import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService<EnvironmentVariables>) {}

  getHello(): string {
    const dbConfig = this.configService.get('JWT_SECRET');
    console.log(dbConfig);

    return 'ok';
  }
}

import { Module } from '@nestjs/common';
import { LoggerService } from './services/logger/logger.service';
import { ExceptionsService } from './services/exceptions/exceptions.service';

@Module({
  providers: [LoggerService, ExceptionsService],
  exports: [LoggerService, ExceptionsService],
})
export class CommonModule {}

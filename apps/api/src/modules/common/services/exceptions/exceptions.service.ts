import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';

export interface IFormatExceptionMessage {
  message: string;
  errorCode?: number;
}

@Injectable()
export class ExceptionsService {
  badRequestException(data: IFormatExceptionMessage) {
    return new BadRequestException(data);
  }
  internalServerErrorException(data?: IFormatExceptionMessage) {
    return new InternalServerErrorException(data);
  }
  forbiddenException(data?: IFormatExceptionMessage) {
    return new ForbiddenException(data);
  }
  unauthorizedException(data?: IFormatExceptionMessage) {
    return new UnauthorizedException(data);
  }

  notFoundException(data?: IFormatExceptionMessage) {
    return new NotFoundException(data);
  }
}

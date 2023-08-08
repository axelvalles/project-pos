import { BadRequestException, ForbiddenException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
export interface IFormatExceptionMessage {
    message: string;
    errorCode?: number;
}
export declare class ExceptionsService {
    badRequestException(data: IFormatExceptionMessage): BadRequestException;
    internalServerErrorException(data?: IFormatExceptionMessage): InternalServerErrorException;
    forbiddenException(data?: IFormatExceptionMessage): ForbiddenException;
    UnauthorizedException(data?: IFormatExceptionMessage): UnauthorizedException;
}

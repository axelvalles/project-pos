import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PayloadToken } from '../models/token.model';

import { AppConfig } from 'src/config/configuration';

@Injectable()
export class JwtStategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(@Inject(ConfigService) configService: ConfigService<AppConfig>) {
    super({
      // OBTENDREMOS EL TOKEN LOS HEADERS COMO 'Bearer token'
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // IGNORA LA EXPIRACION
      ignoreExpiration: false,
      // LA LLAVE SECRETA CON LA QUE FIRMAMOS EL TOKEN AL HACER LOGIN
      secretOrKey: configService.get('SERVER_JWT_SECRET'),
    });
  }

  async validate(payload: PayloadToken) {
    return payload;
  }
}

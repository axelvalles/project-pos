import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth/auth.service';
import { ExceptionsService } from 'src/modules/common/services/exceptions/exceptions.service';

@Injectable()
export class LocalStategy extends PassportStrategy(Strategy, 'local') {
  constructor(
    private authService: AuthService,
    private exceptionsService: ExceptionsService,
  ) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string) {
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw this.exceptionsService.UnauthorizedException();
    }

    return this.authService.login(user);
  }
}

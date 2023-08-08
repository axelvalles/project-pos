import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UsersService } from 'src/modules/users/services/users/users.service';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PayloadToken } from '../../models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      null;
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      null;
    }

    return user;
  }

  async login(user: User) {
    const payload: PayloadToken = { email: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}

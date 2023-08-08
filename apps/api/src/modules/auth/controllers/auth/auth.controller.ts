import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';

import { LocalAuthGuard } from '../../guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return req.user;
  }
}
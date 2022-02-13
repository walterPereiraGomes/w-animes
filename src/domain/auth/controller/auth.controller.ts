import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { LocalGuard } from '../guard/local.guard';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @UseGuards(LocalGuard)
  @Post('/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}

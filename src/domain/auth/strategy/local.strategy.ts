import { Injectable, UnauthorizedException } from "@nestjs/common";

import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../service/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'login',
      passwordField: 'password'
    })
  }

  async validate(login: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(login, password);

    if(!user) throw new UnauthorizedException();

    return user;
  }
}
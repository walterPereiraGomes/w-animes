import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/domain/users/service/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    @Inject(forwardRef(() => UsersService))
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(userLogin: string, userPassword: string) {
    const user = await this.userService.getByLogin(userLogin)
    if(!user) return null

    const isMatch = await compare(userPassword, user.password);

    if(user && isMatch) {
      const { _id: id, name, login} = user;
      return { id, name, login };
    }

    return null
  }

  async login(user: any) {
    const payload = { login: user.login, sub: user.id, admin: 1 };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

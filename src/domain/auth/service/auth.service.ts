import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/domain/users/service/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(userLogin: string, userPassword: string) {
    const user = await this.userService.getByLogin(userLogin)

    if(user && user.password === userPassword) {
      const { _id: id, name, login} = user;
      return { id, name, login };
    }

    return null
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

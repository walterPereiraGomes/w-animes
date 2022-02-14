import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../strategy/constants';

@Injectable()
export class AuthAdminGuard implements CanActivate {
  constructor(private jwtService: JwtService) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const headers = context.switchToHttp().getRequest().rawHeaders;

    const bearer = headers.find(header => header.includes('Bearer'))

    if (!bearer) return false

    const bearerToken = bearer.split('Bearer ')[1]

    const jwtDecoded = this.jwtService. verify(bearerToken)
    return jwtDecoded.admin;
  }
}

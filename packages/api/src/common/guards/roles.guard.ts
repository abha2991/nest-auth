import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { LoggedInUser } from '../../auth/auth.interface'
import { IS_ROLE_KEY } from '../decorators/role.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const role = this.reflector.get<string>(IS_ROLE_KEY, context.getHandler())
    const user: LoggedInUser = context.switchToHttp().getRequest().user

    if (role) {
      return user.role === role
    }

    return true
  }
}

import { HttpException, HttpStatus } from '@nestjs/common';
import { JwtUtils } from './jwtUtil';

export class AuthMiddleware extends JwtUtils {
  async use(req: any, res: any, next: () => void) {
    const token = req?.headers?.['x-authorization'];
    if (!token) throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    const decodedToken = this.verifyToken(token);
    req.headers['x-user-id'] = decodedToken?.['userId'];
    return next();
  }
}

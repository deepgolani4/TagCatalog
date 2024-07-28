import { Configuration } from 'src/configuration';
import { sign, verify } from 'jsonwebtoken';
import { HttpException, HttpStatus } from '@nestjs/common';

export class JwtUtils extends Configuration {
  constructor() {
    super();
  }
  generateAccessToken(payload: Record<string, string | string[]>): string {
    return sign(payload, this.jwtKey, {
      expiresIn: this.jwtAccessExpiry,
    });
  }

  generateRefreshToken(payload: Record<string, string | string[]>): string {
    console.log(
      this.jwtKey,
      this.jwtRefreshExpiry,
      typeof this.jwtAccessExpiry,
    );
    return sign(payload, this.jwtKey, {
      expiresIn: this.jwtRefreshExpiry,
    });
  }

  verifyToken(token: string) {
    return verify(token, this.jwtKey, (err, decodePayload) => {
      if (err) throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      return decodePayload;
    });
  }
}

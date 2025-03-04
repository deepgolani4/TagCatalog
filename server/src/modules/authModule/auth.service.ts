import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import MongoAuthGatewayService from 'src/dbGateway/MongoAuthEntity.service';
import { LoginResponseDto } from 'src/dto/auth/loginResponse.dto';
import { SignUserAndLoginRequestDto } from 'src/dto/auth/SignUpAndLoginUser.dto';
import IdentityEntity from 'src/models/auth.model';
import { JwtUtils } from 'src/utils/jwtUtil';

@Injectable()
export class AuthService extends JwtUtils {
  constructor(
    private readonly mongoAuthGatewayService: MongoAuthGatewayService,
  ) {
    super();
  }

  async signup(request: SignUserAndLoginRequestDto): Promise<IdentityEntity[]> {
    const isUserAlreadyExiting =
      await this.mongoAuthGatewayService.findUserByUserId(request.userId);

    if (isUserAlreadyExiting) {
      throw new HttpException(
        'user with emailId already exists',
        HttpStatus.CONFLICT,
      );
    }

    await this.mongoAuthGatewayService.saveUser({
      userId: request.userId,
      password: request.password,
      activeLogin: 1,
    });
    throw new HttpException('user successfully signed up', HttpStatus.CREATED);
  }

  async login(request: SignUserAndLoginRequestDto): Promise<LoginResponseDto> {
    const userData = await this.mongoAuthGatewayService.findUserByUserId(
      request.userId,
    );

    if (!userData.userId)
      throw new HttpException('user does not exist', HttpStatus.BAD_REQUEST);

    if (userData.password === request.password) {
      return {
        accessToken: this.generateAccessToken({ userId: userData.userId }),
        refreshToken: this.generateRefreshToken({ userId: userData.userId }),
        userName: request.userId,
      };
    } else {
      throw new HttpException('password is incorrect', HttpStatus.BAD_REQUEST);
    }
  }
}

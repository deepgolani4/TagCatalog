import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUserAndLoginRequestDto } from 'src/dto/auth/SignUpAndLoginUser.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Post('/signup')
  async userSignUp(@Body() request: SignUserAndLoginRequestDto) {
    return await this.appService.signup(request);
  }
  @Post('/login')
  async userLogin(@Body() request: SignUserAndLoginRequestDto) {
    return await this.appService.login(request);
  }
}

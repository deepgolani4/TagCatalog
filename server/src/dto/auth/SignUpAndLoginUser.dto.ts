import { IsEmail, IsString } from 'class-validator';

export class SignUserAndLoginRequestDto {
  @IsEmail()
  userId: string;

  @IsString()
  password: string;
}

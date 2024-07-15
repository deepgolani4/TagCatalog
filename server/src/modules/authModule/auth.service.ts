import { Injectable } from '@nestjs/common';
import MongoAuthGatewayService from 'src/dbGateway/MongoAuthEntity.service';
import IdentityEntity from 'src/models/auth.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly mongoAuthGatewayService: MongoAuthGatewayService,
  ) {}

  async getAllData(): Promise<IdentityEntity[]> {
    return this.mongoAuthGatewayService.getAll();
  }
}

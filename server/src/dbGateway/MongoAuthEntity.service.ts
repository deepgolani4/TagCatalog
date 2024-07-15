import { InjectModel } from '@nestjs/mongoose';
import IdentityEntity from 'src/models/auth.model';
import { Model } from 'mongoose';

export default class MongoAuthGatewayService {
  constructor(
    @InjectModel(IdentityEntity.name)
    private readonly IdentityModel: Model<IdentityEntity>,
  ) {}

  async getAll(): Promise<IdentityEntity[]> {
    return this.IdentityModel.find().exec();
  }
}

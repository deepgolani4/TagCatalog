import { InjectModel } from '@nestjs/mongoose';
import IdentityEntity from 'src/models/auth.model';
import { Model } from 'mongoose';

export default class MongoAuthGatewayService {
  constructor(
    @InjectModel(IdentityEntity.name)
    private readonly IdentityModel: Model<IdentityEntity>,
  ) {}

  async findUserByUserId(userId: string): Promise<IdentityEntity> {
    return this.IdentityModel.findOne({ userId: userId }).exec();
  }

  async saveUser(document: IdentityEntity): Promise<IdentityEntity> {
    return this.IdentityModel.create(document);
  }

  // async updateUserLoginDetails({
  //   userId,
  // }: {
  //   userId: string;
  // }): Promise<IdentityEntity> {
  //   return this.IdentityModel.updateOne({ userId: userId }, {});
  // }
}

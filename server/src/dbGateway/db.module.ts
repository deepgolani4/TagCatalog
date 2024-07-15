import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import IdentityEntity from 'src/models/auth.model';
import { IdentitySchema } from 'src/models/auth.schema';
import MongoAuthGatewayService from './MongoAuthEntity.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: IdentityEntity.name, schema: IdentitySchema },
    ]),
  ],
  providers: [MongoAuthGatewayService],
  exports: [MongoAuthGatewayService],
})
export class DbModule {}

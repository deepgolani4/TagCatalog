import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import IdentityEntity from 'src/models/auth.model';
import { IdentitySchema } from 'src/models/auth.schema';
import MongoAuthGatewayService from './MongoAuthEntity.service';
import NotesEntity from 'src/models/notes.model';
import { NotesSchema } from 'src/models/notes.schema';
import UserDataEntity from 'src/models/user.model';
import { UserDataSchema } from 'src/models/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: IdentityEntity.name, schema: IdentitySchema },
    ]),
    MongooseModule.forFeature([
      { name: NotesEntity.name, schema: NotesSchema },
    ]),
    MongooseModule.forFeature([
      { name: UserDataEntity.name, schema: UserDataSchema },
    ]),
  ],
  providers: [MongoAuthGatewayService],
  exports: [MongoAuthGatewayService],
})
export class DbModule {}

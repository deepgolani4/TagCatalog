import { SchemaFactory } from '@nestjs/mongoose';
import UserDataEntity from './user.model';

export const UserDataSchema = SchemaFactory.createForClass(UserDataEntity);
UserDataSchema.index({ userId: 1 }, { unique: true });

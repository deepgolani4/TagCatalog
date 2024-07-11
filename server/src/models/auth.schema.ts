import { SchemaFactory } from '@nestjs/mongoose';
import IdentityEntity from './auth.model';

export const IdentitySchema = SchemaFactory.createForClass(IdentityEntity);
IdentitySchema.index({ userId: 1 }, { unique: true });

import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ collection: 'identity', timestamps: true })
export default class IdentityEntity {
  @Prop({ type: String, required: true, index: true, unique: true })
  userName: string;
  @Prop({ type: String, required: true, index: true, unique: true })
  userId: string;
  @Prop({ type: String, required: true }) password: boolean;
}

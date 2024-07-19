import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ collection: 'identity', timestamps: true, _id: true, id: true })
export default class IdentityEntity {
  @Prop({ type: String, required: true, index: true, unique: true })
  userId: string;

  @Prop({ type: String, required: true }) password: string;

  @Prop({ type: Number }) activeLogin: number;
}

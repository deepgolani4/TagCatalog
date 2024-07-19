import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ collection: 'notes', timestamps: true, id: true, _id: true })
export default class NotesEntity {
  @Prop({ type: String, required: true, index: true, unique: true })
  notesId: string;

  @Prop({ type: String, required: true, index: true, unique: true })
  userId: string;

  @Prop({ type: String, required: true, index: true })
  folderId: string;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String })
  content?: string;

  @Prop({ type: Array<string> })
  tags?: string[];
}

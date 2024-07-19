import { SchemaFactory } from '@nestjs/mongoose';
import NotesEntity from './notes.model';

export const NotesSchema = SchemaFactory.createForClass(NotesEntity);
NotesSchema.index({ notesId: 1 }, { unique: true });
NotesSchema.index({ userId: 1 });
NotesSchema.index({ folderId: 1 });

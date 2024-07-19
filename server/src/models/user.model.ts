import { Prop, SchemaFactory } from '@nestjs/mongoose';

class Tags {
  @Prop({ type: String }) tagsId: string;
  @Prop({ type: String }) tagsName: string;
}

class Folder {
  @Prop({ type: String }) folderName: string;
  @Prop({ type: String }) folderId: string;
}

const TagsEntity = SchemaFactory.createForClass(Tags);
const FolderEntity = SchemaFactory.createForClass(Folder);

export default class UserDataEntity {
  @Prop({ type: String, required: true, index: true, unique: true })
  userId: string;

  @Prop({ type: [TagsEntity] }) tags: Tags[];

  @Prop({ type: [FolderEntity] }) folder: Folder[];
}

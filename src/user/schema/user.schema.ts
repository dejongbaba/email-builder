import { HydratedDocument, Schema } from 'mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  fullname: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);

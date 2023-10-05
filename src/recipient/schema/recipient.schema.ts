import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Recipient {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  status: string;
}

export const RecipientSchema = SchemaFactory.createForClass(Recipient);

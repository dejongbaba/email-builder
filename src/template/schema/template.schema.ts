import { HydratedDocument } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema()
export class Template {
  @Prop({ required: true })
  name: string;

  @Prop()
  link: string;
  @Prop()
  date_created: string;
  @Prop()
  last_updated: string;
}

export type TemplateDocument = HydratedDocument<Template>;
export const TemplateSchema = SchemaFactory.createForClass(Template);

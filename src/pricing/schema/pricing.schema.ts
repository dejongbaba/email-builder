import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Pricing {
  @Prop()
  name: string;
  @Prop()
  templates: string;
  @Prop()
  emails: string;
  @Prop()
  recipients: string;
}

export const PricingSchema = SchemaFactory.createForClass(Pricing);

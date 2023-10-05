import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipientModule } from 'src/recipient/recipient.module';
import { PricingModule } from './pricing/pricing.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TemplateModule } from './template/template.module';

@Module({
  // imports: [RecipientModule, MongooseModule.forRoot('mongodb+srv://lucciddev:Bolaji2020@email-template-builder.u0fglwc.mongodb.net/test?retryWrites=true&w=majority'), UserModule, TemplateModule, PricingModule],
  imports: [
    MongooseModule.forRoot('mongodb://docker:mongopw@localhost:55000'),
    RecipientModule,
    UserModule,
    TemplateModule,
    PricingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
/*
 * Features I want to work on the app
 *  add new recipient
 *  remove recipient
 *  authenticate user
 *
 * */

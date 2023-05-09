import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceipientModule } from './receipient/receipient.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [ReceipientModule, MongooseModule.forRoot('mongodb+srv://lucciddev:Bolaji2020@email-template-builder.u0fglwc.mongodb.net/test?retryWrites=true&w=majority'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

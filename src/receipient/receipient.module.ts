import { Module } from '@nestjs/common';
import { ReceipientService } from './receipient.service';
import { ReceipientController } from './receipient.controller';

@Module({
  providers: [ReceipientService],
  controllers: [ReceipientController]
})
export class ReceipientModule {}

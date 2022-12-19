import { Test, TestingModule } from '@nestjs/testing';
import { ReceipientController } from './receipient.controller';

describe('ReceipientController', () => {
  let controller: ReceipientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceipientController],
    }).compile();

    controller = module.get<ReceipientController>(ReceipientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

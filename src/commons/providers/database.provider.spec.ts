import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseProvider } from 'src/commons/providers/database.provider';

describe('Database', () => {
  let provider: DatabaseProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseProvider],
    }).compile();

    provider = module.get<DatabaseProvider>(DatabaseProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

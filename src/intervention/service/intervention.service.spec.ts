import { Test, TestingModule } from '@nestjs/testing';
import { InterventionService } from './intervention.service';

describe('InterventionService', () => {
  let service: InterventionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterventionService],
    }).compile();

    service = module.get<InterventionService>(InterventionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

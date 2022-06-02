import { Test, TestingModule } from '@nestjs/testing';
import { TheoreticalPropositionService } from './theoretical-proposition.service';

describe('TheoreticalPropositionService', () => {
  let service: TheoreticalPropositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TheoreticalPropositionService],
    }).compile();

    service = module.get<TheoreticalPropositionService>(TheoreticalPropositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

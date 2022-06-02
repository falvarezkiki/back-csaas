import { Test, TestingModule } from '@nestjs/testing';
import { AlalysisUnitService } from './alalysis-unit.service';

describe('AlalysisUnitService', () => {
  let service: AlalysisUnitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlalysisUnitService],
    }).compile();

    service = module.get<AlalysisUnitService>(AlalysisUnitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

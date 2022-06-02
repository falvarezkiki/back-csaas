import { Test, TestingModule } from '@nestjs/testing';
import { ConsultancyService } from './consultancy.service';

describe('ConsultancyService', () => {
  let service: ConsultancyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultancyService],
    }).compile();

    service = module.get<ConsultancyService>(ConsultancyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

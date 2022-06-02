import { Test, TestingModule } from '@nestjs/testing';
import { StudyOfCasesService } from './study-of-cases.service';

describe('StudyOfCasesService', () => {
  let service: StudyOfCasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudyOfCasesService],
    }).compile();

    service = module.get<StudyOfCasesService>(StudyOfCasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

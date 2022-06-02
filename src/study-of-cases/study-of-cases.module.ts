import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyCase } from 'src/entities/studyCase.entity';
import { StudyOfCasesController } from './controller/study-of-cases/study-of-cases.controller';
import { StudyOfCasesService } from './service/study-of-cases.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([StudyCase])
  ],
  controllers: [StudyOfCasesController],
  providers: [StudyOfCasesService]
})
export class StudyOfCasesModule {}

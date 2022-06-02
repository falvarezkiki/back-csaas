import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalysisUnit } from 'src/entities/analysisUnit.entity';
import { AlalysisUnitController } from './controller/alalysis-unit.controller';
import { AlalysisUnitService } from './service/alalysis-unit.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnalysisUnit])
  ],
  controllers: [AlalysisUnitController],
  providers: [AlalysisUnitService]
})
export class AnalysisUnitModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Case } from 'src/entities/case.entity';
import { CaseController } from './controller/case.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Case])
  ],
  controllers: [ CaseController]
})
export class CaseModule {}

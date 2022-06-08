import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Case } from 'src/entities/case.entity';
import { CaseController } from './controller/case.controller';
import { CaseService } from './service/case.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Case])
  ],
  controllers: [ CaseController],
  providers: [CaseService],
})
export class CaseModule {}

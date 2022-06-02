import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TheoreticalProposition } from 'src/entities/theoreticalProposition.entity';
import { TheoreticalPropositionController } from './controller/theoretical-proposition.controller';
import { TheoreticalPropositionService } from './service/theoretical-proposition.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TheoreticalProposition])
  ],
  controllers: [TheoreticalPropositionController],
  providers: [TheoreticalPropositionService]
})
export class TheoreticalPropositionModule {}

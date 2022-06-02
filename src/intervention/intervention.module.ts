import { Module } from '@nestjs/common';
import { InterventionService } from './service/intervention.service';
import { InterventionController } from './controller/intervention.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Intervention } from 'src/entities/intervention.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Intervention])
  ],
  providers: [InterventionService],
  controllers: [InterventionController]
})
export class InterventionModule {}

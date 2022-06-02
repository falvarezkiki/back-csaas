import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultant } from 'src/entities/consultant.entity';
import { ConsultantController } from './controller/consultant/consultant.controller';
import { ConsultantService } from './service/consultant.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Consultant])
  ],
  controllers: [ConsultantController],
  providers: [ConsultantService]
})
export class ConsultantModule {}

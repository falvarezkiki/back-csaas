import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultancy } from 'src/entities/consultancy.entity';
import { ConsultancyController } from './controller/consultancy.controller';
import { ConsultancyService } from './service/consultancy.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Consultancy])
  ],
  controllers: [ConsultancyController],
  providers: [ConsultancyService]
})
export class ConsultancyModule {}

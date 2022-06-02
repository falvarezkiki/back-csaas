import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/entities/question.entity';
import { QuestionController } from './controller/question/question.controller';
import { QuestionService } from './service/question.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Question])
  ],
  controllers: [QuestionController],
  providers: [QuestionService]
})
export class QuestionModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionDto } from 'src/dto/question.dto';
import { Question } from 'src/entities/question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionService {

    constructor(
    @InjectRepository(Question) private questionRepo: Repository<Question>
    ){}

    find(){
        return this.questionRepo.find()
    }

    findOne(id: number){
        return this.questionRepo.findOneBy({id});
    }

    create (question: QuestionDto){
        const newQuestion = this.questionRepo.create(question);
        return this.questionRepo.save(newQuestion);
    }

    async update (id: number, question: QuestionDto){
        const newQuestion= await this.questionRepo.findOneBy({id});
        this.questionRepo.merge(newQuestion, question);
        return this.questionRepo.save(newQuestion);
    }

    async delete(id: number){
        await this.questionRepo.delete(id);
        return true;
    }
}

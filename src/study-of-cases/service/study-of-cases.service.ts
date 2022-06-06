import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudyCaseDto } from 'src/dto/StudyCase.dto';
import { StudyCase } from 'src/entities/studyCase.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudyOfCasesService {

    constructor(
        @InjectRepository (StudyCase) private studyRepo: Repository<StudyCase>
    ){}

    find(){
        return this.studyRepo.find();
    }

    findOne(id: number){
        return this.studyRepo.findOneBy({id});
    }

    create(study: StudyCaseDto){
        const newStudy = this.studyRepo.create(study);
        return this.studyRepo.save(newStudy);
    }

    async update(id: number, studyCase: StudyCaseDto){
        const studyNew = await this.studyRepo.findOneBy({id});
        this.studyRepo.merge(studyNew, studyCase);
        return this.studyRepo.save(studyNew);
    }

    async delete(id: number){
        await this.studyRepo.delete(id);
        return true;
    }
}

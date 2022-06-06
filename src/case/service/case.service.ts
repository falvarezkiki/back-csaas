import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CaseDto } from 'src/dto/case.dto';
import { Case } from 'src/entities/case.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CaseService {

    constructor(
        @InjectRepository(Case) private caseRepo: Repository<Case>
    ){}

    find(){
        return this.caseRepo.find();
    }

    findOne(id: number){
        return this.caseRepo.findOneBy({id});
    }

    create (caso: CaseDto){
        const casoNew= this.caseRepo.create(caso);
        return this.caseRepo.save(casoNew); 
    }

    async update (id: number, caso: CaseDto){
        const casoNew = await this.caseRepo.findOneBy({id});
        this.caseRepo.merge(casoNew, caso);
        return this.caseRepo.save(casoNew);
    }

    async delete(id: number){
        await this.caseRepo.delete(id);
        return true;
    }
  
}



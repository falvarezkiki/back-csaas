import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnalysisUnit } from 'src/entities/analysisUnit.entity';
import { Repository } from 'typeorm';
import { AnalysisUnitDto } from 'src/dto/analysisUnit.dto';

@Injectable()
export class AlalysisUnitService {

    constructor(
        @InjectRepository(AnalysisUnit) private analystRepo: Repository<AnalysisUnit>
    ){}

    findAll(){
        return this.analystRepo.find();
    }

    findOne(id: number){
        return this.analystRepo.findOneBy({id});
    }

    create (analyst: AnalysisUnitDto){
        const newAnalyst = this.analystRepo.create(analyst);
        return this.analystRepo.save(newAnalyst);
    }

    async update (id: number, analyst: AnalysisUnitDto){
        const newAnalyst= await this.analystRepo.findOneBy({id});
        this.analystRepo.merge(newAnalyst, analyst);
        return this.analystRepo.save(newAnalyst);
    }

    async delete (id: number){
        await this.analystRepo.delete(id);
        return true;
    }

}

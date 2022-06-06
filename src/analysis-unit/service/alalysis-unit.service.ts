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

    getAll(){
        return this.analystRepo.find();
    }

    getOne(id: number){
        return this.analystRepo.findOne(id);
    }

    create (analyst: AnalysisUnitDto){
        const newAnalyst = this.analystRepo.create(analyst);
        return this.analystRepo.save(newAnalyst);
    }

    async update (id: number, analyst: AnalysisUnitDto){
        const newAnalyst= await this.analystRepo.findOne(id);
        this.analystRepo.merge(newAnalyst, analyst);
        return this.analystRepo.save(newAnalyst);
    }


}

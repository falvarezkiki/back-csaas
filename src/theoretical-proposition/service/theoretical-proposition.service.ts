import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TheoreticalPropositionDto } from 'src/dto/theoreticalProposition.dto';
import { TheoreticalProposition } from 'src/entities/theoreticalProposition.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TheoreticalPropositionService {

    constructor(
        @InjectRepository (TheoreticalProposition) private theoreticalRepo: Repository<TheoreticalProposition>
    ){}

    find(){
        return this.theoreticalRepo.find();
    }

    findOne(id: number){ 
        return this.theoreticalRepo.findOneBy({id});
    }

    create(poroposition: TheoreticalPropositionDto){
        const newPropo = this.theoreticalRepo.create(poroposition);
        return this.theoreticalRepo.save(newPropo);
    }

    async update(id: number, poroposition: TheoreticalPropositionDto){
        const newPorpo= await this.theoreticalRepo.findOneBy({id});
        this.theoreticalRepo.merge(newPorpo, poroposition);
        return this.theoreticalRepo.save(newPorpo);
    }

    async delete(id: number){
        await this.theoreticalRepo.delete(id);
        return true;
    }
}

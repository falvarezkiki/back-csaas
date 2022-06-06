import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Intervention } from 'src/entities/intervention.entity';
import { Repository } from 'typeorm';
import { InterventionDto } from 'src/dto/intervention.dto';

@Injectable()
export class InterventionService {

    constructor(
        @InjectRepository (Intervention) private interRepo: Repository<Intervention>
    ){}

    find(){
        return this.interRepo.find();
    }

    findOne(id: number){
        return this.interRepo.findOneBy({id});
    }

    create(intervention: InterventionDto){
        const intervNew= this.interRepo.create(intervention);
        return this.interRepo.save(intervNew);
    }

    async update (id: number, intervention: InterventionDto){
        const interNew= await this.interRepo.findOneBy({id});
        this.interRepo.merge(interNew, intervention);
        return this.interRepo.save(interNew);
    }

    async delete(id: number){
        await this.interRepo.delete(id);
        return true;
    }
}

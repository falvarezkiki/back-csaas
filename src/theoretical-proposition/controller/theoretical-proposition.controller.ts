import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TheoreticalPropositionDto } from 'src/dto/theoreticalProposition.dto';
import { TheoreticalPropositionService } from '../service/theoretical-proposition.service';

@Controller('theoretical-proposition')
export class TheoreticalPropositionController {

    constructor(
        private propositionService: TheoreticalPropositionService
    ){}

    @Get()
    find(){
        return this.propositionService.find()
    }

    @Get('/:id')
    findOne(@Param('id')id: number){
        return this.findOne(id);
    }

    @Post()
    create(@Body()body: TheoreticalPropositionDto){
        return this.propositionService.create(body);
    }

    @Put('/:id')
    update(@Param('id')id: number, @Body()body: TheoreticalPropositionDto){
        return this.propositionService.update(id, body);
    }

    @Delete('/:id')
    delete(@Param('id')id: number){
        return this.propositionService.delete(id);
    }
}

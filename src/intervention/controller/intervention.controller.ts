import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InterventionDto } from 'src/dto/intervention.dto';
import { InterventionService } from '../service/intervention.service';

@Controller('intervention')
export class InterventionController {

    constructor(
        private interventionServ: InterventionService
    ){}

    @Get()
    find(){
        return this.interventionServ.find();
    }

    @Get('/:id')
    findOne(@Param('id')id: number){
        return this.interventionServ.findOne(id);
    }

    @Post()
    create(@Body()body: InterventionDto){
        return this.interventionServ.create(body);
    }

    @Put('/:id')
    update(@Param('id')id: number, @Body()body: InterventionDto){
        return this.interventionServ.update(id, body);
    }

    @Delete('/:id')
    delete(@Param('id')id: number){
        return this.interventionServ.delete(id);
    }
}

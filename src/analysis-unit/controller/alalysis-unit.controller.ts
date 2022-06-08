import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AnalysisUnitDto } from 'src/dto/analysisUnit.dto';
import { AlalysisUnitService } from '../service/alalysis-unit.service';

@Controller('alalysis-unit')
export class AlalysisUnitController {

    constructor(
        private unitService: AlalysisUnitService
    ){}

    @Get()
    find(){
        return this.unitService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id')id: number){
        return this.findOne(id);
    }

    @Post()
    create(@Body()body: AnalysisUnitDto){
        return this.unitService.create(body);
    }

    @Put('/:id')
    update(@Param('/:id')id: number, @Body()body: AnalysisUnitDto){
        return this.unitService.update(id, body);
    }

    @Delete('/:id')
    delete(@Param('id')id: number){
        return this.unitService.delete(id);
    }
}

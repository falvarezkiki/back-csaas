import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { CaseDto } from 'src/dto/case.dto';
import { CaseService } from '../service/case.service';

@Controller('case')
export class CaseController {

    constructor(
        private caseService: CaseService
    ){}

    @Get()
    Find(){
        return this.caseService.find();
    }

    @Get('/:id')
    findOne(@Param('id')id: number){
        return this.caseService.findOne(id);
    }

    @Post()
    create(@Body()body: CaseDto){
        return this.caseService.create(body);
    }

    @Put('/:id')
    update (@Param('id')id: number, @Body()body: CaseDto){
        return this.caseService.update(id, body);
    }

    @Delete('/id')
    delete(@Param('id')id: number){
        return this.caseService.delete(id);
    }
}

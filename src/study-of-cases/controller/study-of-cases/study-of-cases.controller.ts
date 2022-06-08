import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudyCaseDto } from 'src/dto/StudyCase.dto';
import { StudyOfCasesService } from 'src/study-of-cases/service/study-of-cases.service';

@Controller('study-of-cases')
export class StudyOfCasesController {

    constructor(
        private studyService: StudyOfCasesService
    ){}

    @Get()
    find(){
        return this.studyService.find()
    }

    @Get('/:id')
    findOne(@Param('id')id: number){
        return this.findOne(id);
    }

    @Post()
    create(@Body()body: StudyCaseDto){
        return this.studyService.create(body);
    }

    @Put('/:id')
    update(@Param('id')id: number, @Body()body: StudyCaseDto){
        return this.studyService.update(id, body);
    }

    @Delete('/:id')
    delete(@Param('id')id: number){
        return this.studyService.delete(id);
    }
}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { QuestionDto } from 'src/dto/question.dto';
import { QuestionService } from 'src/question/service/question.service';

@Controller('question')
export class QuestionController {

    constructor(
        private questionService: QuestionService
    ){}

    @Get()
    find(){
        return this.questionService.find()
    }

    @Get('/:id')
    findOne(@Param('id')id: number){
        return this.findOne(id);
    }

    @Post()
    create(@Body()body: QuestionDto){
        return this.questionService.create(body);
    }

    @Put('/:id')
    update(@Param('id')id: number, @Body()body: QuestionDto){
        return this.questionService.update(id, body);
    }

    @Delete('/:id')
    delete(@Param('id')id: number){
        return this.questionService.delete(id);
    }
}

import { Controller, Get, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('case')
export class CaseController {
    @Get()
    postCase(@Req() req: Request ){
        return `method ${req.method}`;
    }
}

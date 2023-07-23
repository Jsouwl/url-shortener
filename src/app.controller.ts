import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller('')
export class AppController {
    constructor(private readonly appService: AppService){}

    @Get("/:id")
    async redirectUser(@Res() res: Response, @Param("id") id: string): Promise<void> {
        return this.appService.redirect(res, id)
    }
}

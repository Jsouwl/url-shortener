import { Body, Controller, Post } from '@nestjs/common';
import { shortenLinkDto } from './dtos/shorten-link.dto';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {

    constructor(private readonly apiService: ApiService){}

    @Post("generate")
    async shortenLink(@Body() shortenLink: shortenLinkDto): Promise<string> {
        return this.apiService.shortenLink(shortenLink)
    }
}

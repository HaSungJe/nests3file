import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
    constructor(private readonly service: AppService) {}

    @Get()
    getHello(): object {
        return this.service.getJson();
    }
}

import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from './models/link.model';

@Module({
  imports:[MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }])],
  providers: [ApiService],
  controllers: [ApiController]
})
export class ApiModule {}

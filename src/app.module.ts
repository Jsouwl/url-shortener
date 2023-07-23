import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from './api/models/link.model';

@Module({
  imports: [ApiModule, MongooseModule.forRoot("mongodb://localhost:27017/urlShortner"), MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

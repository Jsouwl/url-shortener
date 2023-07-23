import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Link, LinkDocument } from './api/models/link.model';
import { Model } from 'mongoose';
import { Response } from 'express';

@Injectable()
export class AppService {
    constructor(@InjectModel(Link.name) readonly linkModel: Model<LinkDocument>){}

    async redirect(res: Response, id: string): Promise<void> {      
        const link: Link | null = await this.linkModel.findOne({shortedLink: `http://localhost:3000/${id}`}).exec()
        if(link) {
            return res.redirect(link.originalLink)
        } else {
            res.sendStatus(404)
        }
    }
}

import { Injectable } from '@nestjs/common';
import { shortenLinkDto } from './dtos/shorten-link.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Link, LinkDocument } from './models/link.model';
import { Model } from 'mongoose';
import ShortUniqueId from 'short-unique-id';

@Injectable()
export class ApiService {

    constructor(@InjectModel(Link.name) private readonly linkModel: Model<LinkDocument>){}

    async shortenLink(shortenLink: shortenLinkDto): Promise<string> {
        const uid = new ShortUniqueId({length: 10})
        const link = `http://localhost:3000/${uid()}`
        await this.linkModel.create({
            originalLink: shortenLink.link,
            shortedLink:link
        })
        return link
    }
}

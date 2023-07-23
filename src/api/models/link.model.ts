import { Prop, Schema } from "@nestjs/mongoose";
import { SchemaFactory } from "@nestjs/mongoose/dist/factories";
import { HydratedDocument } from "mongoose";

export type LinkDocument = HydratedDocument<Link>

@Schema()
export class Link {
    @Prop()
    originalLink: string

    @Prop()
    shortedLink: string
}

export const LinkSchema = SchemaFactory.createForClass(Link)
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Book extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  author: string;

  @Prop()
  genre: string;

  @Prop({ type: Number })
  availableQuantity: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);

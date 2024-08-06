import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../schemas/book.schema';
import { CreateBookDto, UpdateBookDto } from '../dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private BookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.BookModel(createBookDto);
    return createdBook.save();
  }
 
  async findAll(): Promise<Book[]> {
    return this.BookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    return this.BookModel.findById(id).exec();
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    return this.BookModel.findByIdAndUpdate(id, updateBookDto, {
      new: true,
    }).exec();
  }

//   async remove(id: string): Promise<any> {
//     // return this.BookModel.findByIdAndRemove(id).exec();
//   }
}

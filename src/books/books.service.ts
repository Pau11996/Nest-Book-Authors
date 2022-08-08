import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Book} from "./books.entity";
import {Repository} from "typeorm";
import {CreateBookDto} from "./dto/create-book.dto";

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>) {}

    async createBook(dto: CreateBookDto) {
        const book = await this.bookRepository.create(dto);
        await this.bookRepository.save(book);
        return book;
    }

    async getAllAuthors() {
        return await this.bookRepository.find({relations: {author: true},
        });
    }
}

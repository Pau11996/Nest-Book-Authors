import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Book} from "./books.entity";
import {Repository} from "typeorm";
import {CreateBookDto} from "./dto/create-book.dto";
import {UpdateBookDto} from "./dto/update-book.dto";

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

    async getAllBooks() {
        return await this.bookRepository.find({relations: {author: true},
        });
    }

    async getOneBook(id) {
        return await this.bookRepository.findOne({where: {id: id}});
    }

    async getAuthorsBooks(req) {
        return await this.bookRepository.find({where: {author: req.id}});
    }

    async getOneAuthorBook(id, authorId) {
        return await this.bookRepository.find({where: {
            id: id, author:
                    {id: authorId}
            },
        });
    }

    async removeBook(id) {
        return await this.bookRepository.delete(id);
        };

    async updateBook(id, updateBookDto: UpdateBookDto) {
        return await this.bookRepository.update(id, updateBookDto);
    };
}

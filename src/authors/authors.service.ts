import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Author} from "./authors.entity";
import {Repository} from "typeorm";
import {CreateAuthorDto} from "./dto/create-author.dto";

@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository(Author)
        private authorRepository: Repository<Author>) {}

    async createAuthor(dto: CreateAuthorDto) {
        const author = await this.authorRepository.create(dto);
        await this.authorRepository.save(author);
        return author;
    }

    async getAllAuthors() {
        const authors = await this.authorRepository.find({relations: {book: true},
        });
        return authors;
    }
}

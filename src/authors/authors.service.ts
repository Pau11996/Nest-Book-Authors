import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Author} from "./authors.entity";
import {Repository} from "typeorm";
import {CreateAuthorDto} from "./dto/create-author.dto";
import {UpdateAuthorDto} from "./dto/update-author.dto";

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

    async getOneAuthor(id) {
        const author = await this.authorRepository.findOne({where: {id: id}, relations: {book: true},
        })
        return author;
    }

    async updateAuthor(id, dto: UpdateAuthorDto) {
        return await this.authorRepository.update(id, dto)
    }

    async deleteAuthor(id) {
        return await this.authorRepository.delete(id);
    };
}

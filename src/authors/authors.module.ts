import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Author} from "./authors.entity";
import {Book} from "../books/books.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Author, Book])],
  controllers: [AuthorsController],
  providers: [AuthorsService],

})
export class AuthorsModule {}

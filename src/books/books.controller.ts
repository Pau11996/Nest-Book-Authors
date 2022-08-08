import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {BooksService} from "./books.service";
import {Author} from "../authors/authors.entity";
import {Book} from "./books.entity";
import {CreateBookDto} from "./dto/create-book.dto";

@ApiTags('Books')
@Controller('api')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @ApiOperation({summary: 'Book creation'})
    @ApiResponse({status: 201, type: Book})
    @Post('/books')
    create(@Body('/books') bookDto: CreateBookDto) {
        return this.booksService.createBook(bookDto);
    }

    @ApiOperation({summary: 'Get all books'})
    @ApiResponse({status: 200, type: Author})
    @Get('/books')
    getAll() {
        return this.booksService.getAllAuthors();
    }
}

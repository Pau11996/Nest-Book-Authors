import {Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {BooksService} from "./books.service";
import {Author} from "../authors/authors.entity";
import {Book} from "./books.entity";
import {CreateBookDto} from "./dto/create-book.dto";
import {UpdateBookDto} from "./dto/update-book.dto";

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

    @Delete('/books/:id')
    removeBook(@Param('id') id: string) {
        return this.booksService.removeBook(id);
    }

    @Put('/books/:id')
    update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
        return this.booksService.updateBook(id, updateBookDto);
    }
}

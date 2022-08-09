import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Req} from '@nestjs/common';
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
    create(@Body() bookDto: CreateBookDto) {
        return this.booksService.createBook(bookDto);
    }

    @ApiOperation({summary: 'Get all books'})
    @ApiResponse({status: 200, type: Author})
    @Get('/books')
    getAll() {
        return this.booksService.getAllBooks();
    }

    @ApiOperation({summary: 'Get all books'})
    @ApiResponse({status: 200, type: Author})
    @Get('/books/:id')
    getOneBook(@Param('id') id: string) {
        return this.booksService.getOneBook(id);
    }

    @ApiOperation({summary: 'Get all books'})
    @ApiResponse({status: 200, type: Author})
    @Get('/authors/:autid/books')
    getAuthorsBooks(@Req() req: Request) {
        return this.booksService.getAuthorsBooks(req);
    }

    @ApiOperation({summary: 'Get all books'})
    @ApiResponse({status: 200, type: Author})
    @Get('/authors/:AUTHOR_ID/books/:id')
        getOneAuthorBook(@Param('id') id: string, @Param('AUTHOR_ID') authorId: string) {
        console.log(id)
        console.log(authorId)
        return this.booksService.getOneAuthorBook(id, authorId);
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

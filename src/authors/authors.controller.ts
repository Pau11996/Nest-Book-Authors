import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AuthorsService} from "./authors.service";
import {Author} from "./authors.entity";
import {CreateAuthorDto} from "./dto/create-author.dto";
import {UpdateAuthorDto} from "./dto/update-author.dto";

@ApiTags('Authors')
@Controller('api')
export class AuthorsController {
    constructor(private authorsService: AuthorsService) {}

    @ApiOperation({summary: 'Author creation'})
    @ApiResponse({status: 201, type: Author})
    @Post('/authors')
    create(@Body() authorDto: CreateAuthorDto) {
        return this.authorsService.createAuthor(authorDto);
    }

    @ApiOperation({summary: 'Get all authors'})
    @ApiResponse({status: 200, type: Author})
    @Get('/authors')
    getAll() {
        return this.authorsService.getAllAuthors();
    }

    @ApiOperation({summary: 'Get one author by ID'})
    @ApiResponse({status: 200, type: Author})
    @Get('/authors/:id')
    getOne(@Param('id') id: string) {
        return this.authorsService.getOneAuthor(id);
    }

    @ApiOperation({summary: 'Get one author by ID'})
    @ApiResponse({status: 200, type: Author})
    @Put('/authors/:id')
    updateAuthor(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
        return this.authorsService.updateAuthor(id, updateAuthorDto);
    }

    @ApiOperation({summary: 'Delete author'})
    @ApiResponse({status: 200, type: Author})
    @Delete('/authors/:id')
    deleteAuthor(@Param('id') id: string) {
        return this.authorsService.deleteAuthor(id);
    }
}

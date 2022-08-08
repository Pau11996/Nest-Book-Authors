import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AuthorsService} from "./authors.service";
import {Author} from "./authors.entity";
import {CreateAuthorDto} from "./dto/create-author.dto";

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
}

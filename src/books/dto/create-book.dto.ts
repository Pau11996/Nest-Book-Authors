import {ApiProperty} from "@nestjs/swagger";
import {Author} from "../../authors/authors.entity";
import {IsString} from "class-validator";

export class CreateBookDto {

    @ApiProperty({example: 'War and piece', description: 'Book name'})
    readonly title: string;

    @IsString({message: "Must be string"})
    @ApiProperty({example: 'qaz', description: 'Book description'})
    readonly description: string;

    @ApiProperty({example: 'qaz', description: 'Book description'})
    readonly author: Author;

}
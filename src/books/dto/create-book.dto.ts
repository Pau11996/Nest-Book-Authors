import {ApiProperty} from "@nestjs/swagger";

export class CreateBookDto {

    @ApiProperty({example: 'War and piece', description: 'Book name'})
    readonly title: string;

    @ApiProperty({example: 'qaz', description: 'Book description'})
    readonly description: string;

}
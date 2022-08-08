import {ApiProperty} from "@nestjs/swagger";

export class CreateAuthorDto {

    @ApiProperty({example: '123@mail.ru', description: 'uniq email'})
    readonly firstName: string;
    @ApiProperty({example: 'qaz', description: 'complex password'})
    readonly lastName: string;
}
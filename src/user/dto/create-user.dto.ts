import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: '123@mail.ru', description: 'uniq email'})
    readonly email: string;
    @ApiProperty({example: 'qaz', description: 'complex password'})
    readonly password: string;
}
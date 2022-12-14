import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @IsString({message: "Must be string"})
    @ApiProperty( {example: '123@mail.ru', description: 'uniq email'})
    @IsEmail({},{message: "Wrong email"})
    readonly email: string;

    @ApiProperty({example: 'qaz', description: 'complex password'})
    @IsString({message: "Must be string"})
    @Length(4, 16, {message: "Password lenght must be from 4 to 16 characters"})
    readonly password: string;
}
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class User {
    @ApiProperty({example: '1', description: 'Uniq id'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: '123@mail.ru', description: 'Uniq email'})
    @Column()
    email: string;

    @ApiProperty({example: 'qaz', description: 'complex password'})
    @Column()
    password: string;

}
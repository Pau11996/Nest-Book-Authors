import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";
import {Book} from "../books/books.entity";


@Entity()
export class Author {
    @ApiProperty({example: '1', description: 'Uniq id'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: '123@mail.ru', description: 'Uniq email'})
    @Column()
    firstName: string;

    @ApiProperty({example: 'qaz', description: 'complex password'})
    @Column()
    lastName: string

    @ApiProperty({example: 'qaz', description: 'complex password'})
    @Column({default: 'cool'})
    status: string

    @ApiProperty({example: 'War and Piece', description: 'Book name', type: () => Book})
    @OneToMany(() => Book, (book) => book.author, {onDelete: "CASCADE"})
    book: Book[]

}

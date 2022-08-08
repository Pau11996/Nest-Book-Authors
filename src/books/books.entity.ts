import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";
import {Author} from "../authors/authors.entity";


@Entity()
export class Book {
    @ApiProperty({example: '1', description: 'Uniq id'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'War and piece', description: 'Book title'})
    @Column()
    title: string;

    @ApiProperty({example: 'Its a very nice book', description: 'book description'})
    @Column()
    description: string

    @ApiProperty({example: 'Tolstoy', description: 'Author name', type: () => Author})
    @ManyToOne(() => Author, (author) => author.book)
    author: Author
}

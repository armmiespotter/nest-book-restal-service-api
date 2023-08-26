import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookName: string;

  @Column()
  price: string;

  @Column({ default: true })
  isActive: boolean;
}

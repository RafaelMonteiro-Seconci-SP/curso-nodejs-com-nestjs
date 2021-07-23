/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cidades {
  @PrimaryGeneratedColumn()
  cdCidade: number;

  @Column()
  nmCidade: string;

  @Column()
  cdUf: string;
}
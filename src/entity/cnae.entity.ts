/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  cdCnae: number;

  @Column()
  cdCliente: string;

  @Column()
  descricao: string;

  @Column()
  tipo: string;

  @Column()
  ativo: string;

  @Column()
  seqCdRamo: string;

}
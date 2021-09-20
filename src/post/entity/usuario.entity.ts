/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nmUsuario: string;

  @Column()
  email: string;

  @Column()
  login: string;

  @Column()
  ativo: string;

  @Column()
  telefone: string;

  @Column()
  senha: string;

  @Column()
  situacao: string;
}
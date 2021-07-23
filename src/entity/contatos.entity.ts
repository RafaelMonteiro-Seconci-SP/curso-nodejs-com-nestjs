/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contatos {
  @PrimaryGeneratedColumn()
  cdContato: number;

  @Column()
  cdCliente: number;

  @Column()
  cdLocalTrabalho: number;

  @Column()
  email: number;

  @Column()
  telefone: number;

  @Column()
  cdTipo: string;

  @Column()
  nmGrupo: string;

  @Column()
  ativo: string;
}
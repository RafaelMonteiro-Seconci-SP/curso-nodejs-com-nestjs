/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Codificacao {
  @PrimaryGeneratedColumn()
  cdCodificacao: number;

  @Column()
  descricao: string;

  @Column()
  ativo: string;

  @Column()
  cdTipoCodificacao: number;

  @Column()
  codigoTipo: string;

  @Column()
  descricaoTipo: string;

  @Column()
  ativoTipo: string;

  @Column()
  nome: string;
}
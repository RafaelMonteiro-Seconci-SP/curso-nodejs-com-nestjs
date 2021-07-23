/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AlteracaoContrato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nrContrato: string;

  @Column()
  documentoalteracao: number;

  @Column()
  tipoalteracao: number;

  @Column()
  evento: number;

  @Column()
  dataemissao: string;

  @Column()
  inicioefetivo: string;

  @Column()
  terminoprevisto: string;

  @Column()
  textoclausula: string;

  @Column()
  observacao: string;

  @Column()
  cliente: number;
  
  @Column()
  cdAlteracaoContrato: number;

  @Column()
  produto: number;
}
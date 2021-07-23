/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CoberturaContrato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nrContrato: string;

  @Column()
  produto: number;

  @Column()
  inicio: number;

  @Column()
  termino: number;

  @Column()
  observacao: string;

  @Column()
  grupocontrato: string;

  @Column()
  cdCoberturaContrato: string;

  @Column()
  cdcliente: string;

  @Column()
  valorUnitario: string;

  @Column()
  quantidade: number;
  
  @Column()
  sitcobertura: number;
}
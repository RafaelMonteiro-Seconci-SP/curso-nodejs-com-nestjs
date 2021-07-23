/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contrato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nrContrato: number;

  @Column()
  cdCliente: number;

  @Column()
  gpContrato: string;

  @Column()
  dataInicio: string;

  @Column()
  dataTermino: string;

  @Column()
  situacao: number;

  @Column()
  sqContrato: string;

  @Column()
  dataCadastro: number;

  @Column()
  dataAlteracao: string;
  
  @Column()
  renovacaoAutomatica: number;

  @Column()
  descricao: string;

  @Column()
  grupoContrato: string;

  @Column()
  nmCliente: string;

  @Column()
  vigencia: number;

  @Column()
  quantidadeVidas: number;

  @Column()
  condicoesPagamento: number;

  @Column()
  observacoes: number;

  @Column()
  valorGlobal: number;

  @Column()
  cdContrato: number;

  @Column()
  searchString: number;

  @Column()
  modeloCobranca: number;

  @Column()
  opcrmChamadoLigero: number;


  @Column()
  dataInicioRenovacao: number;

  @Column()
  dataTerminoRenovacao: number;

  @Column()
  modeloContrato: number;

  @Column()
  cnpjCpf: number;
}


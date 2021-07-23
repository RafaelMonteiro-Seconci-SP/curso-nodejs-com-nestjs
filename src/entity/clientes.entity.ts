/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AlteracaoContrato {
  @PrimaryGeneratedColumn()
  cdCliente: number;

  @Column()
  cdSituacao: number;

  @Column()
  cdGrupoEconomico: number;

  @Column()
  nmCliente: string;

  @Column()
  nmFantasia: string;

  @Column()
  webSite: string;

  @Column()
  tpPessoa: number;

  @Column()
  cnpjCpf: string;

  @Column()
  tpCliente: number;

  @Column()
  dtDesativacao: string;
  
  @Column()
  cdUnidade: number;

  @Column()
  ativo: string;

  @Column()
  origem: string;

  @Column()
  invip: string;

  @Column()
  cdGrupoEmpresarial: number;

  @Column()
  idRegraFaturamento: number;
}


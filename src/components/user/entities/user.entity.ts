/* eslint-disable prettier/prettier */
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcrypt';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nmUsuario: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ name: 'login' , type: 'varchar', length: 255 })
  login: string;

  @Column({ type: 'boolean', default: true })
  ativo: string;

  @Column({ type: 'varchar', length: 255 })
  telefone: string;

  @Column({ type: 'varchar', length: 128, nullable: false, select: false })
  senha: string;

  @Column({type: 'varchar',  length: 100, nullable: true })
  situacao: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.senha) {
    return
    }
    this.senha = await hash(this.senha, 10);
  }

}

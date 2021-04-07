import { Modulo } from './Modulo';
import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";

@Entity()
export class Aula {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    link: string;

    @ManyToOne(() => Modulo, modulo => modulo.aulas)
    modulo: Modulo;
}

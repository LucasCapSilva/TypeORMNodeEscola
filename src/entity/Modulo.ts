import { Aula } from './Aula';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

@Entity()
export class Modulo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @OneToMany(() => Aula, aula => aula.modulo)
    aulas: Aula[];

}

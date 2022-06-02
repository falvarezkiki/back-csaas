import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Consultancy } from "./consultancy.entity";



@Entity()
export class Consultant{

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    scientificGrade: string;

    @ManyToOne(()=> Consultancy, (consultancy) => consultancy.consultants)
    consultancy: Consultancy
}
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Case } from "./case.entity";



@Entity()
export class TheoreticalProposition{

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(()=> Case, (cases) => cases.theoreticalProposition)
    cases: Case
}
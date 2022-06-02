import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity()
export class TheoreticalProposition{

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(()=> Case, (case) => case.theoreticalPropositions)
    case: Case
}
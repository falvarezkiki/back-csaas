import { Entity, PrimaryColumn, Column } from "typeorm";



@Entity()
export class AnalysisUnit {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    tipo: string;

    @ManyToOne(()=> Case, (case) => case.analysisUnits)
    case: Case

}
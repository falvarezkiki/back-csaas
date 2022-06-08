import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { Case } from "./case.entity";



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

    @ManyToOne(()=> Case, (cases) => cases.analysisUnit)
    cases: Case

}
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Case } from "./case.entity";
import { Intervention } from "./intervention.entity";



@Entity()
export class StudyCase{

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Intervention, (intervention) => intervention.studyCase)
    intervention: Intervention[]

    @OneToMany(() => Case, (cases) => cases.studyCase)
    cases: Case[]
}
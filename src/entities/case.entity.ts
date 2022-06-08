import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { AnalysisUnit } from "./analysisUnit.entity";
import { Question } from "./question.entity";
import { StudyCase } from "./studyCase.entity";
import { TheoreticalProposition } from "./theoreticalProposition.entity";


@Entity()
export class Case{

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    descriotion: string;
   
    @OneToMany(() => Question, (question) => question.cases)
    questions: Question[]

    @OneToMany(() => TheoreticalProposition, (theoreticalProposition) => theoreticalProposition.cases)
    theoreticalProposition: TheoreticalProposition[]

    @OneToMany(() => AnalysisUnit, (analysisUnit) => analysisUnit.cases)
    analysisUnit: AnalysisUnit[] 

    @ManyToOne(() => StudyCase, (studyCase) => studyCase.cases)
    studyCase: StudyCase


}
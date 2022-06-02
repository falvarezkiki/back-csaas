import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { StudyCase } from "./studyCase.entity";



@Entity()
export class Intervention{
    
    @PrimaryColumn()
    id: number;

    @Column()
    intervention: string;

    @Column()
    consulter: string;

    @ManyToOne(()=> StudyCase, (studyCase) => StudyCase.interventions)
    studyCase: StudyCase
}
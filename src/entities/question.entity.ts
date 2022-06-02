import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Case } from "./case.entity";



@Entity()
export class Question{
    
    @PrimaryColumn()
    id: number;

    @Column()
    question: string;

    @ManyToOne(()=> Case, (case) => case.questions)
    case: Case
}


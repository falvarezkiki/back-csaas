import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Consultant } from "./consultant.entity";



@Entity()
export class Consultancy{
    
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Consultant, (consultant) => consultant.consultancy)
    consultant: Consultant[]

}
import { v4 as uuidv4} from 'uuid';



export class ConsultancyDto{
    id: uuidv4;
    name: string;
    consultants: ConsultancyDto[];

}
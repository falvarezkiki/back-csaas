import { v4 as uuidv4} from 'uuid';


export class InterventionDto {
    id: uuidv4;
    intervention: string;
    consulter: string;
}
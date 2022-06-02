import { v4 as uuidv4} from 'uuid';
import { CaseDto } from './case.dto';
import { ConsultancyDto } from './consultancy.dto';
import { InterventionDto } from './intervention.dto';


export class StudyCaseDto {
    id: uuidv4;
    name: string;
    cases: CaseDto[];
    consultancys: ConsultancyDto[];
    interventions: InterventionDto[];
    
}
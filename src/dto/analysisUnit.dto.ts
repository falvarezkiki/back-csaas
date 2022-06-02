import { v4 as uuidv4} from 'uuid';;

export class AnalysisUnitDto {
    id: uuidv4;
    name: string;
    description: string;
    tipo: string

}
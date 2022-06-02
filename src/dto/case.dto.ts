import { v4 as uuidv4} from 'uuid';
import { AnalysisUnitDto } from './analysisUnit.dto';
import { QuestionDto } from './question.dto';
import { TheoreticalPropositionDto } from './theoreticalProposition.dto';

export class CaseDto{
    id: uuidv4;
    name: string;
    descriotion: string;
    questions: QuestionDto[];
    thereticalPropositions: TheoreticalPropositionDto[];
    analysisUnites: AnalysisUnitDto[];

}
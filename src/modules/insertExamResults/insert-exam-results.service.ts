import { Inject, Injectable } from "@nestjs/common";
import { InsertExamResultsRepository } from "./insert-exam-result.repository";
import { InsertExamResultsRepositoryDto } from "./dto/insert-exam-results-repository.dto";
import { InsertExamResultsDto } from "./dto/insert-exam-results.dto";

@Injectable()
export class InsertExamResultsService {
    constructor(
        @Inject(InsertExamResultsRepository)
        private insertExamResultRepository : InsertExamResultsRepository
    ) {}

    async insertExamResults(result: InsertExamResultsDto)  {
        const insertExamResultsRepositoryDto = new InsertExamResultsRepositoryDto({
            idTurnoAsignado: result.idTurnoAsignado,
            estado: result.estado,
            tipo: result.tipo
        })
        return this.insertExamResultRepository.insertExamResult(insertExamResultsRepositoryDto)
    }  

}
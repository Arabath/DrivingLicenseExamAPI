import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { InsertExamResultsRepositoryDto } from './dto/insert-exam-results-repository.dto';

@Injectable()
export class InsertExamResultsRepository {
    constructor(
        @InjectDataSource() private connection: DataSource,
    ) {}

    async insertExamResult(result:InsertExamResultsRepositoryDto) {
        const res = await this.connection.query(
            'EXEC [dbo].[InsertarResultadoExamenPractico] @0, @1, @2',
            [
                result.idTurnoAsignado,
                result.estado,
                result.tipo
            ],
        );
        return res;
    }
}
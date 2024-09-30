import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class ExamUsersRepository {
    constructor(@InjectDataSource() private connection: DataSource) {}

    async getExamUsers() {
        const res = await this.connection.query('[dbo].[ObtenerUsuariosExamenPractico]')
        return res
    }

}
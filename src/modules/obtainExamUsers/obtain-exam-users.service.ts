import { Inject, Injectable } from '@nestjs/common';
import { ExamUsersRepository } from './obtain-exam-users.respository';
import { UsersExamDto } from './dto/obtain-exam-users.dto';

@Injectable()
export class ExamUsersService {
    constructor(
        @Inject(ExamUsersRepository)
        private examUsersRepository: ExamUsersRepository,
    ) {}

    async getExamUsers():Promise<UsersExamDto> {
        const res = await this.examUsersRepository.getExamUsers();
        return res;
    }
}

import { Module } from '@nestjs/common';
import { ExamUsersController } from './obtain-exam-users.controller';
import { ExamUsersRepository } from './obtain-exam-users.respository';
import { ExamUsersService } from './obtain-exam-users.service';

@Module({
    controllers: [ExamUsersController],
    providers: [ExamUsersService, ExamUsersRepository]
})

export class ExamUsersModule {}
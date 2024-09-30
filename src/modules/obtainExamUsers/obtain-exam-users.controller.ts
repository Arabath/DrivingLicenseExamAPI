import { Controller, Get, Inject } from '@nestjs/common';
import { ExamUsersService } from './obtain-exam-users.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('ExamUsers')
@Controller('examUsers')
export class ExamUsersController {
    constructor(
        @Inject(ExamUsersService)
        private readonly examUserService: ExamUsersService,
    ) {}

   @Get()
   getExamUser() {
    return this.examUserService.getExamUsers();
   } 
}
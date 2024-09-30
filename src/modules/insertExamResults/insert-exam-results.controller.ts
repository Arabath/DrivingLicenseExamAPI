import { Body, Controller, Inject, Post } from '@nestjs/common';
import { InsertExamResultsService } from './insert-exam-results.service';
import { InsertExamResultsDto } from './dto/insert-exam-results.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('InsertExamResults')
@Controller('insert-exam-results')
export class InsertExamResultsController {
    constructor(
        @Inject(InsertExamResultsService) private readonly insertExamResultsService: InsertExamResultsService
    ) {}

    @Post()
    insertExamResults(@Body() result: InsertExamResultsDto) {
        return this.insertExamResultsService.insertExamResults(result)
    }
}




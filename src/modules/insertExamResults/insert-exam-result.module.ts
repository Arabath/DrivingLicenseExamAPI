import { Module } from '@nestjs/common';
import { InsertExamResultsController } from './insert-exam-results.controller';
import { InsertExamResultsService } from './insert-exam-results.service'
import { InsertExamResultsRepository } from './insert-exam-result.repository';

@Module({
  controllers: [InsertExamResultsController],
  providers: [InsertExamResultsService, InsertExamResultsRepository]
})
export class InsertExamResultsModule {}

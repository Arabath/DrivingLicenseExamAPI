import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';

import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomConfigService } from './shared/custom-config.service';

import { ExamUsersModule } from './modules/obtainExamUsers/obtain-exam-users.module';
import { InsertExamResultsModule } from './modules/insertExamResults/insert-exam-result.module';
import { InsertTurnModule } from './modules/insertTurn/insert-turn.module';


@Module({
  imports: [
    InsertTurnModule,
    InsertExamResultsModule,
    ExamUsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    SharedModule,
    TypeOrmModule.forRootAsync({
      inject: [CustomConfigService],
      useFactory: async (cf: CustomConfigService) => cf.databaseConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

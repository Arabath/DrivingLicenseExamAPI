import { Module } from '@nestjs/common';
import { InsertTurnService } from './insert-turn.service';
import { InsertTurnController } from './insert-turn.controller';
import { InsertTurnRepository } from './insert.turn.repository';

@Module({
  controllers: [InsertTurnController],
  providers: [InsertTurnService, InsertTurnRepository]
})
export class InsertTurnModule {}

import { Body, Controller, Inject, Post } from '@nestjs/common';
import { InsertTurnService } from './insert-turn.service';
import { InsertAssignedTurnDto } from './dto/insert-turn.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('InsertAssignedTurn')
@Controller('insert-turn')
export class InsertTurnController {
    constructor(
        @Inject(InsertTurnService) private readonly inserTurnService: InsertTurnService
    ) {}

    @Post()
    insertAssignedTurns(@Body() turnAssigned: InsertAssignedTurnDto) {
        return this.inserTurnService.insertTurn(turnAssigned)
    }
}

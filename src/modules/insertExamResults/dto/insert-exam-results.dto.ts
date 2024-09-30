import { ApiProperty } from '@nestjs/swagger';

export class InsertExamResultsDto {
  @ApiProperty()
  idTurnoAsignado: number;
  @ApiProperty()
  estado: number;
  @ApiProperty()
  tipo: string;
}

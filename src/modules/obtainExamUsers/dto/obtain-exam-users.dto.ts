import { ApiProperty } from '@nestjs/swagger';

export class UsersExamDto {
  @ApiProperty()
  EstadoExamen: number;
  @ApiProperty()
  FechaExamen: Date;
  constructor({
    EstadoExamen,
    FechaExamen,
  }: {
    EstadoExamen: number;
    FechaExamen: Date;
  }) {
    (this.EstadoExamen = EstadoExamen), (this.FechaExamen = FechaExamen);
  }
}
import { ApiProperty } from '@nestjs/swagger';

export class InsertAssignedTurnDto {
  @ApiProperty()
  idTurno: number;
  @ApiProperty()
  idSolicitudTurno?: number;
  @ApiProperty()
  tipoDocumento: string;
  @ApiProperty()
  documento: string;
  @ApiProperty()
  apellido: string;
  @ApiProperty()
  nombre: string;
  @ApiProperty()
  idPais?: number;
  @ApiProperty()
  telefono: string;
  @ApiProperty()
  fechaNacimiento: Date;
  @ApiProperty()
  domicilio: string;
  @ApiProperty()
  domicilioNumero: String;
  @ApiProperty()
  entreCalle1?: string;
  @ApiProperty()
  entreCalle2?: string;
  @ApiProperty()
  codigoPostal: string;
  @ApiProperty()
  localidad: string;
  @ApiProperty()
  idTramite: number;
  @ApiProperty()
  fechaRenovacion?: Date;
  @ApiProperty()
  email: string;
  @ApiProperty()
  token: string;
  @ApiProperty()
  grupoFactor?: string;
}

export class InsertExamResultsRepositoryDto {
    idTurnoAsignado: number;
    estado: number;
    tipo: string;
    constructor({
      idTurnoAsignado,
      estado,
      tipo,
    }: {
      idTurnoAsignado: number;
      estado: number;
      tipo: string;
    }) {
      this.idTurnoAsignado = idTurnoAsignado;
      this.estado = estado
      this.tipo = tipo;

    }
  }
  
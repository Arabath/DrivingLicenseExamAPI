export class InsertTurnRepositoryDto {
  idTurno: number;
  idSolicitudTurno?: number;
  tipoDocumento: string;
  documento: string;
  apellido: string;
  nombre: string;
  idPais?: number;
  telefono: string;
  fechaNacimiento: Date;
  domicilio: string;
  domicilioNumero: String;
  entreCalle1?: string;
  entreCalle2?: string; 
  codigoPostal: string;
  localidad: string;
  idTramite: number;
  fechaRenovacion?: Date;
  email: string;
  token: string;
  grupoFactor?: string;
  constructor({
    idTurno,
    idSolicitudTurno,
    tipoDocumento,
    documento,
    apellido,
    nombre,
    idPais,
    fechaNacimiento,
    telefono,
    domicilio,
    domicilioNumero,
    entreCalle1,
    entreCalle2,
    codigoPostal,
    localidad,
    idTramite,
    fechaRenovacion,
    email,
    token,
    grupoFactor,
  }: {
    idTurno: number;
    idSolicitudTurno?: number;
    tipoDocumento: string;
    documento: string;
    apellido: string;
    nombre: string;
    idPais?: number;
    fechaNacimiento: Date;
    telefono: string;
    domicilio: string;
    domicilioNumero: String;
    entreCalle1?: string;
    entreCalle2?: string;
    codigoPostal: string;
    localidad: string;
    idTramite: number;
    fechaRenovacion?: Date;
    email: string;
    token: string;
    grupoFactor?: string;
  }) {
    this.idTurno = idTurno;
    this.idSolicitudTurno = idSolicitudTurno
    this.tipoDocumento = 'CUIL';
    this.documento = documento;
    this.apellido = apellido;
    this.nombre = nombre;
    this.idPais = 11;
    this.fechaNacimiento = fechaNacimiento;
    this.telefono = telefono;
    this.domicilio = domicilio;
    this.domicilioNumero = domicilioNumero;
    this.entreCalle1 = entreCalle1;
    this.entreCalle2 = entreCalle2;
    this.codigoPostal = '2804';
    this.localidad = 'Campana';
    this.idTramite = idTramite;
    this.fechaRenovacion = fechaRenovacion;
    this.email = email;
    this.token = token;
    this.grupoFactor = grupoFactor;
  }
}

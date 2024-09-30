import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { InsertTurnRepositoryDto } from './dto/insert-turn-repository.dto';

@Injectable()
export class InsertTurnRepository {
    constructor(
        @InjectDataSource() private connection:DataSource,
    ) {}

    async insertTurn(turn: InsertTurnRepositoryDto) {
        const res =  await this.connection.query(
            'EXEC [dbo].[InsertarTurnoAsignado] @0, @1, @2, @3, @4, @5, @6, @7, @8, @9, @10, @11, @12, @13, @14, @15, @16, @17, @18, @19 ',
            [
                turn.idTurno,
                turn.idSolicitudTurno,
                turn.tipoDocumento,
                turn.documento,
                turn.apellido,
                turn.nombre,
                turn.idPais,
                turn.fechaNacimiento,
                turn.telefono,
                turn.domicilio,
                turn.domicilioNumero,
                turn.entreCalle1,
                turn.entreCalle2,
                turn.codigoPostal,
                turn.localidad,
                turn.idTramite,
                turn.fechaRenovacion,
                turn.email,
                turn.token,
                turn.grupoFactor,
            ],
        );
        return res;
    }
}
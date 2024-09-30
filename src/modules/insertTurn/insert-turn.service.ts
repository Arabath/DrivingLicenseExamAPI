import { Inject , Injectable } from '@nestjs/common';
import { InsertTurnRepository } from './insert.turn.repository';
import { InsertTurnRepositoryDto } from './dto/insert-turn-repository.dto';
import { InsertAssignedTurnDto } from './dto/insert-turn.dto';


@Injectable()
export class InsertTurnService {
    constructor(
        @Inject(InsertTurnRepository)
        private insertTurnRepository: InsertTurnRepository
    ) {}

    async insertTurn(turn: InsertAssignedTurnDto) {
        const insertTurnRepositoryDto = new InsertTurnRepositoryDto({
            idTurno: turn.idTurno,
            tipoDocumento: turn.tipoDocumento,
            documento: turn.documento,
            apellido: turn.apellido,
            nombre: turn.nombre,
            idPais: turn.idPais,
            fechaNacimiento: turn.fechaNacimiento,
            telefono: turn.telefono,
            domicilio: turn.domicilio,
            domicilioNumero: turn.domicilioNumero,
            codigoPostal: turn.codigoPostal,
            localidad: turn.localidad,
            idTramite: turn.idTramite,
            fechaRenovacion :turn.fechaRenovacion,
            email: turn.email,
            token: turn.token,
            grupoFactor: turn.grupoFactor    
        })
        return this.insertTurnRepository.insertTurn(insertTurnRepositoryDto)
    }
}


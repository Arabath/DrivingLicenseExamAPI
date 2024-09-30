import { INestApplication } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomConfigService } from '../src/shared/custom-config.service';
import { Test } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { RequestRepository } from '../src/modules/request/request.repository';
import { SharedModule } from '../src/shared/shared.module';
import { RequestModule } from '../src/modules/request/request.module';
import { CreateRequestRepositoryDto } from '../src/modules/request/dto/create-request-repository.dto';
import * as request from 'supertest';
import { RequestResponseDto } from '../src/modules/request/dto/request-response.dto';
import e from 'express';

describe('Request', () => {
  let app: INestApplication;
  let requestRepository: RequestRepository;

  const testRequest = {
    nombre: 'Mariano',
    apellido: 'Baldovino',
    email: 'mariano1baldovino@gmail.con',
    documento: '45051325',
    idTramite: 1,
    token: 'tokenfalso123',
  };

  const createRequestRepositoryDto = new CreateRequestRepositoryDto({
    ...testRequest,
  });

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        SharedModule,
        TypeOrmModule.forRootAsync({
          inject: [CustomConfigService],
          useFactory: async (cf: CustomConfigService) => cf.databaseConfig,
        }),
        RequestModule,
      ],
      providers: [CustomConfigService],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    requestRepository = moduleRef.get<RequestRepository>(RequestRepository);
    requestRepository.deleteAll()

  });

  it('/GET request', async () => {
    const res = await requestRepository.create(createRequestRepositoryDto);

    return request(app.getHttpServer())
      .get('/request/' + testRequest.token)
      .expect(200)
      .then((response) => {
        const data = response.body.data
        delete data.id
        expect(data).toMatchSnapshot()
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
//import { DataSourceOptions } from 'typeorm';

@Injectable()
export class CustomConfigService {
  constructor(@Inject(ConfigService) private configService: ConfigService) {}

  get databaseConfig(): TypeOrmModuleOptions {
    if (this.configService.get('NODE_ENV') == 'test') {
      return {
        type: 'mssql',
        host: this.configService.get('DB_HOST'),
        port: parseInt(this.configService.get('DB_PORT')),
        username: this.configService.get('DB_USERNAME'),
        password: this.configService.get('DB_PASSWORD'),
        database: this.configService.get('DB_DATABASE_TESTING'),
        entities: [],
        synchronize: false,
        options: { encrypt: false },
      };
    } else {
      return {
        type: 'mssql',
        host: this.configService.get('DB_HOST'),
        port: parseInt(this.configService.get('DB_PORT')),
        username: this.configService.get('DB_USERNAME'),
        password: this.configService.get('DB_PASSWORD'),
        database: this.configService.get('DB_DATABASE'),
        entities: [],
        synchronize: false,
        options: { encrypt: false },
      };
    }
  }

  get mailerConfig() {
    return {
      host: this.configService.get('MAIL_HOST'),
      port: parseInt(this.configService.get('MAIL_PORT')),
      secure: true,
      auth: {
        user: this.configService.get('MAIL_USER'),
        pass: this.configService.get('MAIL_PASSWORD'),
      },
      tls: {
        ciphers: 'SSLv3',
      },
    };
  }
}

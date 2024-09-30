import { Global, Module } from '@nestjs/common';
import { CustomConfigService } from './custom-config.service';
//import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [CustomConfigService],
  exports: [CustomConfigService],
})
export class SharedModule {}

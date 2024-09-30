import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './commons/filters/http-exception.filter';
import { ApiKeyGuard } from './guards/api-key.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //CORS ADDED
  app.enableCors();
  //Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Transito API')
    .setDescription('API Turnos Tránsito')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();
  await app.listen(3000);
  app.useGlobalGuards(new ApiKeyGuard())
}
bootstrap();

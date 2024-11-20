import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Prueba Global API')
    .setDescription('Documentación de la API de User para la prueba de Global Think Technology')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,  // Elimina las propiedades no validadas del cuerpo
    forbidNonWhitelisted: true,  // Lanza una excepción si hay propiedades no validadas
    transform: true,  // Convierte las propiedades según los DTOs
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,  // Elimina las propiedades no validadas del cuerpo
    forbidNonWhitelisted: true,  // Lanza una excepción si hay propiedades no validadas
    transform: true,  // Convierte las propiedades según los DTOs
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

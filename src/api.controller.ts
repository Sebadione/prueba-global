import { Controller, Get } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('/')
export class ApiController {
  @Get()
  getApiInfo() {
    return {
      message: 'Bienvenido a la API',
      availableEndpoints: {
        users: '/api/v1/users',
        docs: '/api-docs',
      },
      status: 200,
    };
  }
}

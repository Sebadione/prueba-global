import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ApiController } from './api.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.x6c8j.mongodb.net/db_global'),
    UsersModule,
  ],
  controllers: [ApiController],
})

export class AppModule {}

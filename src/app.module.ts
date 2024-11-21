import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.x6c8j.mongodb.net/db_global'),
    UsersModule,
  ],
})

export class AppModule {}

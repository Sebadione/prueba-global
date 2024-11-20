import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.x6c8j.mongodb.net/db_global'),
    UserModule,
  ],
})

export class AppModule {}

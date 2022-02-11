import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './domain/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimesModule } from './domain/animes/animes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:8081/admin', {autoCreate: true}),
    UsersModule,
    AnimesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

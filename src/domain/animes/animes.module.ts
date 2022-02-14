import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { AnimesController } from './controller/animes.controller';
import { AnimeSchema } from './schema/anime.schema';
import { AnimesService } from './service/animes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name:'Anime', schema: AnimeSchema}]),
    forwardRef(() => AuthModule)
  ],
  controllers: [AnimesController],
  providers: [AnimesService]
})
export class AnimesModule {}

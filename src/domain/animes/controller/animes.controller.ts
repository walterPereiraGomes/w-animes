import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/domain/auth/guard/jwt-auth.guard';
import { AnimeCreateDto } from '../dto/animeCreate.dto';
import { Anime } from '../entity/anime.entity';
import { AnimesService } from '../service/animes.service';

@Controller('animes')
export class AnimesController {

  constructor(private readonly animesService: AnimesService) { }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<Anime[]> {
    return this.animesService.getAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getById(@Param('id') id: string): Promise<Anime> {
    return this.animesService.getById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() anime: AnimeCreateDto) {
    return this.animesService.create(anime)
  }
}

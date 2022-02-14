import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AnimeCreateDto } from '../dto/animeCreate.dto';
import { Anime } from '../entity/anime.entity';

@Injectable()
export class AnimesService {
  constructor(@InjectModel('Anime') private readonly animeModel: Model<Anime>) {}

  async getAll(): Promise<Anime[]>{
    return await this.animeModel.find().exec()
  }

  async getById(id: string): Promise<Anime>{
    return await this.animeModel.findById(id).exec()
  }

  async create(anime: AnimeCreateDto) {
    
    if(new Date(anime.creationDate) > new Date()) throw new BadRequestException(['creation date cannot be greater than current date'])
    
    const createdAnime = new this.animeModel(anime);
    return await createdAnime.save();
  }

  async update(anime: AnimeCreateDto) {
    const createdAnime = new this.animeModel(anime);
    return await createdAnime.save();
  }
}

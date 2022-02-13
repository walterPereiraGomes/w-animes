import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/domain/auth/guard/jwt-auth.guard';
import { UserCreateDto } from '../dto/userCreate.dto';
import { UserUpdateDto } from '../dto/userUpdate.dto';
import { User } from '../entity/user.entity';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService) {}
  @Get()
  async getAll() {
    return await this.userService.getAll()
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getById(@Param('id') id: string) {
    return await this.userService.getById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() userDto: UserCreateDto) {
    return await this.userService.create(userDto)
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() userDto: UserUpdateDto): Promise<User> {
    return await this.userService.update(userDto, id)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteById(@Param('id') id: string) {
    this.userService.delete(id);
  }

}

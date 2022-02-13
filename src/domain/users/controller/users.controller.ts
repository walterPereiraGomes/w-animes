import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
  async getById(@Param('id') id: string) {
    return await this.userService.getById(id);
  }

  @Post()
  async create(@Body() userDto: UserCreateDto) {
    return await this.userService.create(userDto)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() userDto: UserUpdateDto): Promise<User> {
    return await this.userService.update(userDto, id)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    this.userService.delete(id);
  }

}

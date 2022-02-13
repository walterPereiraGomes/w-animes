import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreateDto } from '../dto/userCreate.dto';
import { UserUpdateDto } from '../dto/userUpdate.dto';
import { User } from '../entity/user.entity';


@Injectable()
export class UsersService {

  constructor (@InjectModel('User') private readonly userModel: Model<User>) { }

  async getAll() {
    return await this.userModel.find().exec();
  }

  async getById(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async create(user: UserCreateDto) {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async update(newUser: UserUpdateDto, id: string): Promise<User> {
    try {
      const user: User = await this.getById(id);
      const userUpdated = Object.assign(user, newUser);
      await this.userModel.updateOne({ _id: id}, userUpdated).exec();

      return userUpdated;
    } catch (e: any) {
      console.log('e :>> ', e);
    }
  }

  async delete(id: string){
    return await this.userModel.deleteOne({ _id: id}).exec()
  }
}

import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { UsersController } from './controller/users.controller';
import { UserSchema } from './schemas/user.schema';
import { UsersService } from './service/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name:'User', schema: UserSchema}]),
    forwardRef(() => AuthModule)
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}

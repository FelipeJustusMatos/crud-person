import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/PrismaService';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
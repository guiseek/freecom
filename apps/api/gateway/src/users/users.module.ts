import { Module } from '@nestjs/common'
import { User, UserSchema } from './schemas/user.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersService } from './users.service'
import { UsersGateway } from './users.gateway'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersGateway, UsersService],
})
export class UsersModule {}

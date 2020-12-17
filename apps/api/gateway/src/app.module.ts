import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'

import { SignalingModule } from '@freecom/signaling';
import { UsersModule } from './users/users.module'

const mongooseFactory = (configService: ConfigService) => {
  return { uri: configService.get('MONGO_URI') }
}

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: mongooseFactory,
      inject: [ConfigService],
    }),
    UsersModule,
    SignalingModule
  ],
})
export class AppModule {}

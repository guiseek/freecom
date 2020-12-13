import { SignalingGateway } from './signaling.gateway'
import { SignalingLogger } from './signaling.logger'
import { Module } from '@nestjs/common'

@Module({
  providers: [SignalingGateway, SignalingLogger],
})
export class SignalingModule {}

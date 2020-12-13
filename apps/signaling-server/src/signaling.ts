import { Module } from '@nestjs/common'
import { SignalingGateway } from './signaling.gateway'
import { SignalingLogger } from './signaling.logger'

@Module({
  providers: [SignalingGateway, SignalingLogger],
})
export class Signaling {}

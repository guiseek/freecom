import { Module } from '@nestjs/common'
import { SignalingModule } from '@freecom/signaling'

@Module({
  imports: [SignalingModule],
})
export class Signaling {}

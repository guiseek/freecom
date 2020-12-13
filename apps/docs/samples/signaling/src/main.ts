import { SignalingLogger } from '@freecom/signaling'
import { NestFactory } from '@nestjs/core'
import { Signaling } from './signaling'

async function bootstrap() {
  const app = await NestFactory.create(Signaling, { logger: false })
  const port = process.env.PORT || 3333
  const message = `On http://localhost: ${port}`
  await app.listen(port, () => {
    SignalingLogger.log(message)
  })
}

bootstrap()

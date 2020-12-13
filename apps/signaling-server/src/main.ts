import { SignalingLogger } from './signaling.logger'
import { NestFactory } from '@nestjs/core'
import { Signaling } from './signaling'

async function bootstrap() {
  const app = await NestFactory.create(Signaling, { logger: false })
  app.useLogger(app.get(SignalingLogger))

  const port = process.env.PORT || 3000
  const message = `http://localhost:${port}`
  const context = 'SignalingServer'

  await app.listen(port, () => SignalingLogger.log(message, context))
}

bootstrap()

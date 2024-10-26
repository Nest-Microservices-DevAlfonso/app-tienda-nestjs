import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import envs from './config/envs';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Plaza-MS | Main')
  const app = await NestFactory.create(AppModule);
  await app.listen(envs.PORT);
  logger.log(`Servidor corriendo en el puerto: ${envs.PORT}`)
}
bootstrap();

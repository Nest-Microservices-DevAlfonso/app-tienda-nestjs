import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import envs from './config/envs';
import { options } from 'joi';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.connectMicroservice<MicroserviceOptions>({
    options: {
      servers: envs.NATS_SERVERS
    }
  })

  await app.listen(envs.PORT);

}
bootstrap();

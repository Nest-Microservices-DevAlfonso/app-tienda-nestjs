import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import envs from './config/envs';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const logger = new Logger("Bodega-ms | Main")
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.NATS,
  //     options: {
  //       servers: envs.NATS_SERVERS
  //     }
  //   }
  // );
  const app = await NestFactory.create(AppModule);

  await app.listen(envs.PORT);
  logger.log("Microservicio Bodega-ms Corriendo")
}
bootstrap();

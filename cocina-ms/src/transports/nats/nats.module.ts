import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import envs from 'src/config/envs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: envs.NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: envs.NATS_SERVERS,
        },
      },
    ]),
  ],
  exports: [
      ClientsModule.register([
        {
          name: envs.NATS_SERVICE,
          transport: Transport.NATS,
          options: {
            servers: envs.NATS_SERVERS,
          },
        },
      ]),
  ],
})
export class NatsModule {}

import { Module } from '@nestjs/common';
import { NatsModule } from './transports/nats/nats.module';
import { CocinaModule } from './cocina/cocina.module';

@Module({
  imports: [ NatsModule, CocinaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

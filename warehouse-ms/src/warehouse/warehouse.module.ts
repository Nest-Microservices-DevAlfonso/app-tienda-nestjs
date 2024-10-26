import { Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import { NatsModule } from 'src/transports/nats/nats.module';

@Module({
  controllers: [WarehouseController],
  providers: [WarehouseService],
  imports: [NatsModule],
})
export class WarehouseModule {}

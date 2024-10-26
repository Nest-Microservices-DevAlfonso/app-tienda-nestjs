import { Module } from '@nestjs/common';
import { FarmersMarketService } from './farmers-market.service';
import { FarmersMarketController } from './farmers-market.controller';

@Module({
  controllers: [FarmersMarketController],
  providers: [FarmersMarketService],
})
export class FarmersMarketModule {}

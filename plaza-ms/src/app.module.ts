import { Module } from '@nestjs/common';
import { FarmersMarketModule } from './farmers-market/farmers-market.module';

@Module({
  imports: [FarmersMarketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

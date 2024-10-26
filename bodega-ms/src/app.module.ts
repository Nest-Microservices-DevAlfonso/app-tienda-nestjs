import { Module } from '@nestjs/common';
import { BodegaModule } from './bodega/bodega.module';

@Module({
  imports: [BodegaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

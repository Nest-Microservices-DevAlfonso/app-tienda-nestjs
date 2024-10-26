import { Module } from '@nestjs/common';
import { CocinaService } from './cocina.service';
import { CocinaController } from './cocina.controller';

@Module({
  controllers: [CocinaController],
  providers: [CocinaService],
})
export class CocinaModule {}

import { Controller, Get, Query } from '@nestjs/common';
import { FarmersMarketService } from './farmers-market.service';
import { SellIngredientDto } from './dto/sell-ingredient.dto';

@Controller('farmers-market')
export class FarmersMarketController {
  constructor(private readonly farmersMarketService: FarmersMarketService) {}

  @Get('/buy')
  sell(@Query() sellIngredientDto: SellIngredientDto) {
    return this.farmersMarketService.sellIngredient(sellIngredientDto);
  }
}

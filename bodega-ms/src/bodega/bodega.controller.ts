import { Controller, Get, Query } from '@nestjs/common';
import { BodegaService } from './bodega.service';
import { RetrieveIngredientsDto  } from './dto';

@Controller('bodega')
export class BodegaController {
  constructor(private readonly bodegaService: BodegaService) {}
  /**
   * permite obtener los ingredientes de la bodega
   */
  @Get('/retrieve-ingredient')
  retrieveIngredients(@Query() ingredient: RetrieveIngredientsDto) {
    return this.bodegaService.retrieveIngredients(ingredient)
  }
}


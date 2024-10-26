import { Controller, Get, Query } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { RetrieveIngredientsDto } from './dto';

@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}
  /**
   * permite obtener los ingredientes de la bodega
   */
  @Get('/retrieve-ingredient')
  retrieveIngredients(@Query() ingredient: RetrieveIngredientsDto) {
    return this.warehouseService.retrieveIngredients(ingredient);
  }
}

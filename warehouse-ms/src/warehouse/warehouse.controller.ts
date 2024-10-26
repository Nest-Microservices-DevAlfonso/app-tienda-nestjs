import { Controller, Get, Patch, Query } from '@nestjs/common';
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

  @Patch('/retrieve-ingredient')
  updateIngredientQuantity(@Query() ingredient: RetrieveIngredientsDto) {
    return this.warehouseService.retrieveIngredients(ingredient);
  }
}

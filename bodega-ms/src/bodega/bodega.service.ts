import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { RetrieveIngredientsDto } from './dto';
import { IngredientEntity } from './entity/ingredient.entity';
import { IngredientName } from './enum/ingredients-name.enum';

@Injectable()
export class BodegaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  private async findIngredient(ingredientName:string){
    try{
      const ingredient = await this.ingredient.findUnique({
        where: {
          name: ingredientName,
        }
      })
      
      if (!ingredient){
        throw new NotFoundException(`ingredient not found`)
      }

      const { id, name, quantity } = ingredient
      const nameEnum = IngredientName[name as keyof typeof IngredientName];
      return new IngredientEntity(id, nameEnum , quantity)
    }catch(error) {
      console.error(error)
    }
    
  }
  
  async retrieveIngredients({ ingredientName, quantity}: RetrieveIngredientsDto){
      const ingredient = await this.findIngredient(ingredientName);

      if ( ingredient.getQuantity() - quantity < 0 ) {
        // TODO: comprar los ingredientes a la plaza
        return;
      }
      
      await ingredient.UpdateQuantity(quantity)
      
      return ingredient.toApiJSON()
  }


}

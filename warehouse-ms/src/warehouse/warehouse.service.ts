import { Inject, Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { RetrieveIngredientsDto } from './dto';
import { IngredientEntity } from './entity/ingredient.entity';
import { IngredientName } from './enum/ingredients-name.enum';
import envs from 'src/config/envs';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class WarehouseService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  constructor(@Inject(envs.NATS_SERVICE) private readonly natsClient: ClientProxy){
    super()
  }

  private async findIngredient(ingredientName:string){
    try{
      const ingredient = await this.warehouse.findUnique({
        where: {
          ingredientName,
        }
      })
      
      if (!ingredient){
        throw new NotFoundException(`ingredient not found`)
      }

      const {  ingredientName:name, quantity } = ingredient
      const nameEnum = IngredientName[name as keyof typeof IngredientName];
      return new IngredientEntity( nameEnum , quantity)
    }catch(error) {
      console.error(error)
    }
    
  }
  
  async retrieveIngredients({ ingredientName, quantity}: RetrieveIngredientsDto){
    const ingredient = await this.findIngredient(ingredientName);
    
    if ( ingredient.getQuantity() - quantity < 0 ) {
      await this.natsClient.emit('orderPurchane.create', { ingredientName, quantity })
    }
    
    await ingredient.UpdateQuantity(quantity)
    
    return ingredient.toApiJSON()
  }



}

import { PrismaClient } from '@prisma/client';
import { IngredientName } from '../enum/ingredients-name.enum';
import { InternalServerErrorException } from '@nestjs/common';
const prisma = new PrismaClient();

export class WarehouseEntity {
  constructor(
    private ingredientName: IngredientName,
    private quantity: number    
  ){}

  async UpdateQuantity(quantity){
      const newQuantity = this.getQuantity() - quantity;

      if(newQuantity < 0){
        throw new InternalServerErrorException(`la cantidad no puede ser menor a 0`)
      }

      this.quantity= newQuantity
      return await prisma.warehouse.update({
        where: { ingredientName: this.ingredientName },
        data: {
          quantity: newQuantity
        }
      })
  }


  getQuantity(){
    return this.quantity;
  }

  toApiJSON(){
    return {
      IngredientName: this.ingredientName,
      quantity: this.getQuantity(),
    }
  }
  
}
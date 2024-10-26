import { PrismaClient } from '@prisma/client';
import { IngredientName } from '../enum/ingredients-name.enum';
import { InternalServerErrorException } from '@nestjs/common';
const prisma = new PrismaClient();

export class IngredientEntity {
  constructor(
    private id: string,
    private name: IngredientName,
    private quantity: number    
  ){}

  async UpdateQuantity(quantity){
      const newQuantity = this.getQuantity() - quantity;

      if(newQuantity < 0){
        throw new InternalServerErrorException(`la cantidad no puede ser menor a 0`)
      }

      this.quantity= newQuantity
      return await prisma.ingredient.update({
        where: { id:this.id },
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
      name: this.name,
      quantity: this.getQuantity(),
      id: this.id
    }
  }
  
}
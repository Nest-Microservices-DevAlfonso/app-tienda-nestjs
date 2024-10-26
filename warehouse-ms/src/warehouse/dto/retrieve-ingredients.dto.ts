import { Type } from 'class-transformer';
import {  IsEnum, IsNumber, IsPositive, Min } from 'class-validator';
import { IngredientName } from '../enum/ingredients-name.enum';

export const IngredientNameList = [
  IngredientName.cheese,
  IngredientName.chicken,
  IngredientName.ketchup,
  IngredientName.lemon,
  IngredientName.lettuce,
  IngredientName.meat,
  IngredientName.onion,
  IngredientName.potato,
  IngredientName.rice,
  IngredientName.tomato
]

export class RetrieveIngredientsDto {
  
  @IsEnum(IngredientNameList)
  ingredientName: IngredientName;

  @IsNumber()
  @IsPositive()
  @Min(1)
  @Type(()=> Number)
  quantity: number;
}

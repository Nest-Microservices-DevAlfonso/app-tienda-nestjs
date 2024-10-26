import { IsEnum, IsString } from "class-validator"


export enum Ingredient {
  "tomato",
  "lemon",
  "potato",
  "rice",
  "ketchup",
  "lettuce",
  "onion",
  "cheese",
  "meat",
  "chicken"
}

export class SellIngredientDto {
  @IsString()
  @IsEnum(Ingredient, {
    message: 'the ingredient is invalid' 
  })
  ingredient: Ingredient
}

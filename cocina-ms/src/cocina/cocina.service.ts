import { Injectable } from '@nestjs/common';
import { IDish } from './interfaces';

@Injectable()
export class CocinaService {
  dishes:IDish[] = [
    {
      name: "arroz con queso",
      ingredients: [
        {
          ingredientName: "rice",
          quantity: 1
        },
        {
          ingredientName: "cheese",
          quantity: 2
        }
      ]
    },
    {
      name: "arroz con queso",
      ingredients: [
        {
          ingredientName: "rice",
          quantity: 1
        },
        {
          ingredientName: "cheese",
          quantity: 2
        }
      ]
    },
    {
      name: "arroz con queso",
      ingredients: [
        {
          ingredientName: "rice",
          quantity: 1
        },
        {
          ingredientName: "cheese",
          quantity: 2
        }
      ]
    },
    {
      name: "arroz con queso",
      ingredients: [
        {
          ingredientName: "rice",
          quantity: 1
        },
        {
          ingredientName: "cheese",
          quantity: 2
        }
      ]
    },
    {
      name: "arroz con queso",
      ingredients: [
        {
          ingredientName: "rice",
          quantity: 1
        },
        {
          ingredientName: "cheese",
          quantity: 2
        }
      ]
    },
    {
      name: "arroz con queso",
      ingredients: [
        {
          ingredientName: "rice",
          quantity: 1
        },
        {
          ingredientName: "cheese",
          quantity: 2
        }
      ]
    }
  ]
  
  makeNewDish(newDish:IDish){
    this.dishes.push(newDish)
    return newDish;
  }

  


}

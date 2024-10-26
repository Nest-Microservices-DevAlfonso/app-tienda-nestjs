import { Injectable } from '@nestjs/common';
import { SellIngredientDto } from './dto/sell-ingredient.dto';

@Injectable()
export class FarmersMarketService {
  sellIngredient({ ingredient }: SellIngredientDto) {
    const randomNumber = Math.ceil(Math.random() * 10); //

    /**
     * setear la probabilidad de + o - 50%
     */
    if (randomNumber >= 5 ) {
      return {"quantitySold": 0, ingredient }
    }

    const quantitySold = Math.ceil((Math.random() * 10 ) / 2);
    return { quantitySold, ingredient };
  }
}

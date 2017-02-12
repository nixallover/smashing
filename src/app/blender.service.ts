import { Injectable } from '@angular/core';

import { Ingredient } from './ingredients/ingredient.type';
import { Drink      } from './drink.type';

@Injectable()
export class BlenderService {

  constructor() { }

  public shared: any = {
    activeDrink: new Drink(1, 'new drink')
  };

  public addIngredient(ingredient: Ingredient): void {
    console.info('adding ingredient', ingredient, this.shared.activeDrink.ingredients);
    this.shared.activeDrink.ingredients.push(ingredient);
  }

  public removeIngredient(myIngredient: Ingredient): void {
    console.info('removing ingredient', myIngredient, this.shared.activeDrink.ingredients);
    let activeIngredients: Ingredient[] = this.shared.activeDrink.ingredients;
    let myIndex: number = activeIngredients.indexOf(myIngredient);
    
    activeIngredients.splice(myIndex, 1);
  }

}

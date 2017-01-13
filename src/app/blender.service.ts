import { Injectable } from '@angular/core';

import { Drink } from './drink.type';

@Injectable()
export class BlenderService {

  constructor() { }

  public activeDrink: Drink = new Drink(1, 'new drink');

  public addIngredient(ingredient: any): void {
    console.info('adding ingredient', ingredient);
    this.activeDrink.ingredients.push[ingredient];
  }

}

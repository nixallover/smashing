import { Injectable } from '@angular/core';

import { Ingredient } from './ingredients/ingredient.type';
import { Category } from './ingredients/category.type';
import { Drink } from './drink.type';

import { CATEGORIES } from './data/categories';
import { INGREDIENTS } from './data/ingredients';

@Injectable()
export class PantryService {
  private categories: Category[] = CATEGORIES;
  private ingredients: Ingredient[] = INGREDIENTS;

  public pantry: any = [];

}

import { Injectable } from '@angular/core';

import { Ingredient } from './ingredients/ingredient.type';
import { Category } from './ingredients/category.type';
import { Drink } from './drink.type';

import { CATEGORIES } from './data/categories';
import { INGREDIENTS } from './data/ingredients';

import * as _ from 'lodash';

@Injectable()
export class PantryService {
  private categories: Category[] = CATEGORIES;
  private ingredients: Ingredient[] = INGREDIENTS;

  public pantry: any = [];

  public buildPantry(): any[] {
    let pantry: any[];
    let currCategory: any;

    let categories = _.cloneDeep(this.categories);
    let ingredients = _.cloneDeep(this.ingredients);

    // sort
    let sortedCategories = _.sortBy(this.categories, 'title');
    let sortedIngredients = _.sortBy(this.ingredients, 'name');

    pantry = sortedCategories;

    _.each(sortedIngredients, (ing) => {
      currCategory = _.find(pantry, ['id', ing.categoryId]);
      currCategory.ingredients.push(ing);
    });

    console.log('my completed pantry', pantry);

    return pantry;
  }

}

import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../ingredients/ingredient.type';
import { Category } from '../../ingredients/category.type';

import { CATEGORIES } from '../../data/categories';
import { INGREDIENTS } from '../../data/ingredients';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html'
})
export class IngredientListComponent implements OnInit {
  private categories: Category[] = CATEGORIES;
  private ingredients: Ingredient[] = INGREDIENTS;

  constructor() { }

  ngOnInit() {
  }

}

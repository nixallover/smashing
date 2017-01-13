import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../ingredients/ingredient.type';
import { Category } from '../../ingredients/category.type';
import { Drink } from '../../drink.type';

import { CATEGORIES } from '../../data/categories';
import { INGREDIENTS } from '../../data/ingredients';

import { BlenderService } from '../../blender.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html'
})
export class IngredientListComponent implements OnInit {
  private categories: Category[] = CATEGORIES;
  private ingredients: Ingredient[] = INGREDIENTS;
  private shared: any;

  constructor(private blenderSvc: BlenderService) {
    this.shared = blenderSvc.shared;
   }

  public ngOnInit() {
  }

  private addIngredient(ingredient: Ingredient): void {
    this.blenderSvc.addIngredient(ingredient);
  }

}

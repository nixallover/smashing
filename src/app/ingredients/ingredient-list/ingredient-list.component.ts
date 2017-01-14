import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../ingredients/ingredient.type';
import { Category } from '../../ingredients/category.type';
import { Drink } from '../../drink.type';

// import { CATEGORIES } from '../../data/categories';
// import { INGREDIENTS } from '../../data/ingredients';

import { PantryService } from '../../pantry.service';
import { BlenderService } from '../../blender.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  providers: [PantryService]
})
export class IngredientListComponent implements OnInit {
  // private categories: Category[] = CATEGORIES;
  // private ingredients: Ingredient[] = INGREDIENTS;
  private pantry: any;
  private shared: any;

  constructor(
    private pantrySvc: PantryService,
    private blenderSvc: BlenderService
  ) {
    this.pantry = pantrySvc.pantry;
    this.shared = blenderSvc.shared;
   }

  public ngOnInit() {
    this.pantrySvc.buildPantry();
  }

  private addIngredient(ingredient: Ingredient): void {
    this.blenderSvc.addIngredient(ingredient);
  }

}

import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../ingredients/ingredient.type';
import { Category } from '../../ingredients/category.type';
import { Drink } from '../../drink.type';

import { PantryService } from '../../pantry.service';
import { BlenderService } from '../../blender.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  providers: [PantryService]
})
export class IngredientListComponent implements OnInit {
  private pantryData: any;
  private shared: any;

  constructor(
    private pantrySvc: PantryService,
    private blenderSvc: BlenderService
  ) {
    this.pantryData = pantrySvc.pantryData;
    this.shared = blenderSvc.shared;
   }

  public ngOnInit() {
    this.pantrySvc.buildPantry();
  }

  private addIngredient(ingredient: Ingredient): void {
    this.blenderSvc.addIngredient(ingredient);
  }

}

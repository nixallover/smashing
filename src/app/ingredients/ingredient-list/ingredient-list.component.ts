import { Component, OnInit } from '@angular/core';

import { INGREDIENTS } from '../../data/ingredients';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html'
})
export class IngredientListComponent implements OnInit {
  private ingredients: any[] = INGREDIENTS;

  constructor() { }

  ngOnInit() {
  }

}

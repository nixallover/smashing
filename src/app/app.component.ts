import { Component } from '@angular/core';

import { INGREDIENTS } from './data/ingredients';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Smush!';
  private ingredients: any[] = INGREDIENTS;
 }

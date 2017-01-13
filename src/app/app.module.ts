import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { IngredientListComponent } from './ingredients/ingredient-list/ingredient-list.component';
import { BlenderComponent } from './blender/blender.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    BlenderComponent,
    IngredientListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, signal, inject } from '@angular/core';
import { RecipeModel } from './models';

import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { ServingsControlComponent } from './servings-control/servings-control.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { SelectedRecipe } from './selected-recipe/selected-recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root', 
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RecipeListComponent, ServingsControlComponent, IngredientListComponent, SelectedRecipe]
})
export class App {
  
  protected readonly title = signal('My Recipe Box');
  protected readonly recipeService = inject(RecipeService);

  protected setRecipe(recipe:RecipeModel): void{
    this.recipeService.setRecipe(recipe);
  }
}

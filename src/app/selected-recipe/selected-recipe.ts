import { Component, input } from '@angular/core';
import { RecipeModel } from '../models';

@Component({
  selector: 'selected-recipe',
  imports: [],
  templateUrl: './selected-recipe.html',
  styleUrl: './selected-recipe.css',
})
export class SelectedRecipe {
  readonly recipe = input.required<RecipeModel>();
}

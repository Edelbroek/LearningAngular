import { Component, input } from '@angular/core';
import { RecipeModel } from '../models';

@Component({
  selector: 'selected-recipe',
  imports: [],
  templateUrl: './selected-recipe.component.html',
  styleUrl: './selected-recipe.component.css',
})
export class SelectedRecipeComponent {
  readonly recipe = input.required<RecipeModel>();
}

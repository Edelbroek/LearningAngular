import { Component, input, output } from '@angular/core';
import { RecipeModel } from '../models';

@Component({
  selector: 'recipe-list',
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent{

    recipes = input.required<RecipeModel[]>();
    selectedRecipe = input.required<RecipeModel>();
    recipeSelected = output<RecipeModel>();
}
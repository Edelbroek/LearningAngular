import { Component, input } from '@angular/core';
import { Ingredient } from '../models';

@Component({
  selector: 'ingredient-list',
  imports: [],
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css',
})
export class IngredientListComponent {
  readonly ingredients = input.required<Ingredient[]>()
}

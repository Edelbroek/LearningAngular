import { Injectable, signal, computed } from "@angular/core";
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from "./models";

@Injectable({providedIn: 'root'})
export class RecipeService{
    private readonly _recipes = signal<RecipeModel[]>(MOCK_RECIPES);
    readonly recipes = this._recipes.asReadonly();
    private readonly _servings = signal<number>(1);
    readonly servings = this._servings.asReadonly();
    private readonly _selectedRecipe = signal<RecipeModel>(MOCK_RECIPES[0]);
    readonly selectedRecipe = this._selectedRecipe.asReadonly();

    readonly ingredientList = computed(() => this.selectedRecipe().ingredients.map(ingredient => ({
        ...ingredient,
        quantity: ingredient.quantity * (this.servings() || 1)
    }))
  );

  incrementServings = () => this._servings.update(x => x +1);
  decrementServings = () => {
    if(this.servings() > 1)
    this._servings.update(x => x -1);
  }

  setRecipe = (recipe:RecipeModel): void => {
    this._selectedRecipe.set(recipe);
  }
}
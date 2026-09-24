import { Component, inject } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'servings-control',
    imports: [],
    templateUrl: './servings-control.component.html',
    styleUrl: './servings-control.component.css'
})
export class ServingsControlComponent{
    readonly recipeService = inject(RecipeService);
}



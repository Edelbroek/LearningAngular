export interface RecipeModel{
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    ingredients: Ingredient[];
}

export interface Ingredient{
    name: string;
    quantity: number;
    unit: string;
}
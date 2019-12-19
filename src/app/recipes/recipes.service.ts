import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    selectedRecipe = new EventEmitter<Recipe>();


    private recipeList = [
        new Recipe("Chicken Masala",
        "Indian Chicken Curry",
        "https://upload.wikimedia.org/wikipedia/commons/1/13/Chicken_Tikka_Masala_Curry.png",
        [
            new Ingredient("Chicken (Kg)",1),
            new Ingredient("Masala (gm)",15) 
        ]
        ),
        new Recipe("Chicken Tikka Masala",
        "Indian boneless chicken curry",
        "https://upload.wikimedia.org/wikipedia/commons/f/fd/Chicken_tikka_masala.jpg",
        [
            new Ingredient("Boneless Chicken (Kg)",0.5),
            new Ingredient("Masala (gm)",10) 
        ]
        )
      ];

    constructor(private slService: ShoppingListService){

    }
    addRecipe(recipe: Recipe){
        // console.log(recipe)
        this.slService.addRecipeIngredients(recipe.ingredients);
    }
    getRecipe(){
        return this.recipeList.slice();
    }
}
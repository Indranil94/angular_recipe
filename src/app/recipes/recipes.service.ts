import { Recipe } from './recipes.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    // selectedRecipe = new Subject<number>();

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
        ),
        new Recipe("Oatmeal Pancakes",
        "Oatmeal pancakes with honey and nuts",
        "https://sallysbakingaddiction.com/wp-content/uploads/2013/11/Whole-Wheat-Pancakes-4.jpg",
        [
            new Ingredient("Oatmeal (gm)",30),
            new Ingredient("Nuts (gm)",5), 
            new Ingredient("Honey (Tbsp)",2) 
        ]
        )
      ];
    recipeListSubject = new Subject<Recipe[]>();
    constructor(private slService: ShoppingListService){
    }
    addRecipe(recipe: Recipe){
        // console.log(recipe)
        this.slService.addRecipeIngredients(recipe.ingredients);
    }
    getRecipe(){
        this.recipeListSubject.next(this.recipeList.slice())
        return this.recipeList.slice();

    }

    getParticularRecipe(index: number){
        return this.recipeList[index];
    }

    addNewRecipe(recipe: Recipe){
        this.recipeList.push(recipe);
        this.recipeListSubject.next(this.recipeList.slice())
    }

    updateRecipe(updatedRecipe: Recipe, index: number){
        this.recipeList[index]=updatedRecipe;
        this.recipeListSubject.next(this.recipeList.slice())

    }

    deleteRecipe(index: number){
        this.recipeList.splice(index,1);
        this.recipeListSubject.next(this.recipeList)
    }

}
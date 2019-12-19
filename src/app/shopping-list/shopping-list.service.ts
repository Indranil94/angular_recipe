import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredientsList=[
        new Ingredient("Chicken(Kg)",2),
        new Ingredient("Tomato",4),
        new Ingredient("Masala(gm)",50)
      ];

    setIngredients(ingredients: Ingredient[]){
        this.ingredientsList=ingredients;
    }

    getIngredients(){
        return this.ingredientsList.slice();
    }

    addRecipeIngredients(ingredients: Ingredient[]){
        this.ingredientsList.push(...ingredients);
        console.log(this.ingredientsList)
        this.ingredientsChanged.emit(this.ingredientsList.slice())
    }
    addIngredients(ingredientElement: Ingredient){
        this.ingredientsList.push(new Ingredient(ingredientElement.name,ingredientElement.amount));
        this.ingredientsChanged.emit(this.ingredientsList.slice())
    }
}
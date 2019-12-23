import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{

    ingredientSelected = new Subject<Ingredient>();
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredientsList=[
        new Ingredient("Chicken (Kg)",2),
        new Ingredient("Tomato",4),
        new Ingredient("Masala (gm)",50)
      ];

    setIngredients(ingredients: Ingredient[]){
        this.ingredientsList=ingredients;
    }

    getIngredients(){
        return this.ingredientsList.slice();
    }

    addIngredients(ingredientElement: Ingredient){
        let newVal: Boolean=true;
        this.ingredientsList.forEach((ingredient: Ingredient)=>{
            if(ingredientElement.name===ingredient.name){
                newVal = false;
                ingredient.amount += ingredientElement.amount;
                return;
            }
        })
        if(newVal){
            this.ingredientsList.push(new Ingredient(ingredientElement.name,ingredientElement.amount));
        }
        this.ingredientsChanged.next(this.ingredientsList.slice())
    }

    addRecipeIngredients(ingredients: Ingredient[]){
        ingredients.forEach((ingredient:Ingredient)=>{
            this.addIngredients(ingredient);
        })
        // console.log(this.ingredientsList)
    }

    deleteIngredient(ingredientElement: Ingredient){
        let elementFound: boolean=false;
        this.ingredientsList.forEach((ingredient: Ingredient, index: number)=>{
            if(ingredientElement.name===ingredient.name){
                elementFound=true;
                if(ingredientElement.amount>ingredient.amount){
                    throw new Error("Amount entered is greater than amount to be deleted")
                }
                ingredient.amount-=ingredientElement.amount;
                if(ingredient.amount===0){
                    this.ingredientsList.splice(index,1)
                }
                return;
            }
        })
        if(!elementFound){
            throw new Error("No such ingredient found")
        }
        this.ingredientsChanged.next(this.ingredientsList);
    }


    getIngredient(ingredientElement: Ingredient){
        this.ingredientSelected.next(ingredientElement);
    }
}
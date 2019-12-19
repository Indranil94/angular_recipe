import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input("chosenRecipe") recipe: Recipe;
  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
  }

  shopIngredients(){
    this.recipeService.addRecipe(this.recipe)
  }

}

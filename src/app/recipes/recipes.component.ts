import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipes.service';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  chosenRecipe: Recipe= null;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (selectedRecipe: Recipe)=>{
        this.chosenRecipe = selectedRecipe;
      }
    )
  }

  // onRecipeChoice=(data:{recipe: Recipe})=>{
  //   this.chosenRecipe = data.recipe
  // }

}

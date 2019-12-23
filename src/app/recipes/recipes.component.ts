import { Component, OnInit } from '@angular/core';
// import { RecipeService } from './recipes.service';
// import { Recipe } from './recipes.model';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  // chosenRecipe: number= null;
  constructor() { }

  ngOnInit() {
    // this.recipeService.selectedRecipe.subscribe(
    //   (selectedRecipe: number)=>{
    //     // this.chosenRecipe = selectedRecipe;
    //     if(selectedRecipe)
    //       this.router.navigate(['/recipes/'+selectedRecipe]);
    //   }
    // )
  }

  // onRecipeChoice=(data:{recipe: Recipe})=>{
  //   this.chosenRecipe = data.recipe
  // }

}

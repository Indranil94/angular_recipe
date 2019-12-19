import { Recipe } from '../recipes.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  // @Output() chooseRecipe = new EventEmitter<{recipe:Recipe}>();
  // chosenRecipe: Recipe=null;
  recipes: Recipe[]=[];


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe()
  }

  // onRecipeChoice=(data:{recipe:Recipe})=>{
  //   this.chooseRecipe.emit({
  //     recipe: data.recipe
  //   })
  // }

}

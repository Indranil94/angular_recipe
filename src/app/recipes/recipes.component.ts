import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  chosenRecipe: Recipe= null;
  constructor() { }

  ngOnInit() {
  }

  onRecipeChoice=(data:{recipe: Recipe})=>{
    this.chosenRecipe = data.recipe
  }

}

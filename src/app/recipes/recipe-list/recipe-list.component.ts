import { Recipe } from '../recipes.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() chooseRecipe = new EventEmitter<{recipe:Recipe}>();
  chosenRecipe: Recipe=null;
  recipes: Recipe[]=[
    new Recipe("Chicken Masala","Indian Chicken Curry","https://upload.wikimedia.org/wikipedia/commons/1/13/Chicken_Tikka_Masala_Curry.png"),
    new Recipe("Chicken Tikka Masala","Indian boneless chicken curry","https://upload.wikimedia.org/wikipedia/commons/1/13/Chicken_Tikka_Masala_Curry.png")
  ];


  constructor() { }

  ngOnInit() {
  }

  onRecipeChoice=(data:{recipe:Recipe})=>{
    this.chooseRecipe.emit({
      recipe: data.recipe
    })
  }

}

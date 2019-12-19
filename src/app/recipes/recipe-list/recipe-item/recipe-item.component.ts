import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() chooseRecipe = new EventEmitter<{recipe: Recipe}>();
  @Input("recipeItem") recipeitem: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onChooseRecipe=()=>{
    this.chooseRecipe.emit({
      recipe: this.recipeitem
    })
  }

}

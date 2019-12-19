import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // @Output() chooseRecipe = new EventEmitter<{recipe: Recipe}>();
  @Input("recipeItem") recipeitem: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onChooseRecipe=()=>{
    // this.chooseRecipe.emit({
    //   recipe: this.recipeitem
    // })
    this.recipeService.selectedRecipe.emit(this.recipeitem);
  }

}

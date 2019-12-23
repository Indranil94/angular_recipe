import { Recipe } from '../recipes.model';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipes.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  
  // @Output() chooseRecipe = new EventEmitter<{recipe:Recipe}>();
  // chosenRecipe: Recipe=null;
  recipes: Recipe[]=[];
  sub: Subscription;

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe()
    this.sub=this.recipeService.recipeListSubject.subscribe((recipeList: Recipe[])=>{
      this.recipes=recipeList;
    })
  }

  onCreateNew() {
    this.router.navigate(['/recipes/new'])
  }

  // onRecipeChoice=(data:{recipe:Recipe})=>{
  //   this.chooseRecipe.emit({
  //     recipe: data.recipe
  //   })
  // }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}

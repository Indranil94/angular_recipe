import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];
  ilSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingListService.getIngredients();
    this.ilSubscription=this.shoppingListService.ingredientsChanged.subscribe(
      (ingredientList: Ingredient[])=>{
        this.ingredients = ingredientList
      }
    )
  }

  ngOnDestroy() {
    this.ilSubscription.unsubscribe();
  }

  onIngredientSelect(ingredient: Ingredient){
    this.shoppingListService.getIngredient(ingredient)
  }

}

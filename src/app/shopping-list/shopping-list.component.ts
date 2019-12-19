import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Chicken(Kg)",2),
    new Ingredient("Tomato",4),
    new Ingredient("Masala(gm)",50)
  ];

  constructor() { }

  ngOnInit() {
  }

}

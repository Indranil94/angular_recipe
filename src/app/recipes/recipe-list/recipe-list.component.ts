import { Recipe } from '../recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe("Chicken Masala","Indian Chicken Curry","https://upload.wikimedia.org/wikipedia/commons/1/13/Chicken_Tikka_Masala_Curry.png")
  ];


  constructor() { }

  ngOnInit() {
  }

}

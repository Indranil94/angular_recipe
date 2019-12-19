import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("amountInput",{static: true}) amtInp: ElementRef;
  nameInput: string="";
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd=()=>{
    this.shoppingListService.addIngredients({
      name: this.nameInput,
      amount: this.amtInp.nativeElement.value
    })
  }

}

import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<Ingredient>();
  @ViewChild("amountInput",{static: true}) amtInp: ElementRef;
  nameInput: string="";
  constructor() { }

  ngOnInit() {
  }

  onAdd=()=>{
    this.addIngredient.emit({
      name: this.nameInput,
      amount: this.amtInp.nativeElement.value
    })
  }

}

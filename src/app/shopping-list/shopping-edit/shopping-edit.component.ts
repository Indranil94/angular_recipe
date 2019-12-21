import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("amountInput",{static: true}) amtInp: ElementRef;
  nameInput: string="";
  errorMsg=""
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd=(form: NgForm)=>{
    if(form.value.amountInput<1){
      this.errorMsg = "Please enter a positive value"
    }
    else{
      this.shoppingListService.addIngredients({
        name: form.value.nameInput,
        amount: form.value.amountInput
      })
    }
    // amount: this.amtInp.nativeElement.value
  }
  onReset(form: NgForm){
    form.resetForm()
  }

}

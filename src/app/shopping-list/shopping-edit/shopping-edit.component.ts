import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  // @ViewChild("amountInput",{static: true}) amtInp: ElementRef;
  nameInput: string="";
  errorMsg=""
  @ViewChild("f", {static: true}) setForm: NgForm;
  sub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.sub=this.shoppingListService.ingredientSelected.subscribe(ingredient=>{
      this.setForm.setValue({
        nameInput: ingredient.name,
        amountInput: ingredient.amount
      })
    });
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
      form.resetForm();
    }

    // amount: this.amtInp.nativeElement.value
  }

  onDelete(form: NgForm){
    try{
      this.shoppingListService.deleteIngredient({
        name: form.value.nameInput,
        amount: form.value.amountInput
      })
    }catch(e){
      this.errorMsg=e.message
    }

  }

  onReset(form: NgForm){
    form.resetForm();
    this.errorMsg=""
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }


  ngOnInit() {

    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id']
        this.editMode = params['id']!=null
        // console.log(this.editMode)
      }
    )


    if(this.editMode){
      this.recipe = this.recipeService.getParticularRecipe(this.id)
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl( this.editMode?this.recipe.name: null , [Validators.required]),
      'imagePath': new FormControl( this.editMode?this.recipe.imagePath: null, [Validators.required] ),
      'description': new FormControl( this.editMode?this.recipe.description: null, [Validators.required] ),
      'ingredients': new FormArray(this.editMode?this.recipe.ingredients.map(
        (ingredient: Ingredient)=>{
          return new FormGroup(
            {
              'ingredientName': new FormControl(ingredient.name, [Validators.required]),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.min(0)])
            }
          )
        }
      ):[])

    })

  }

  getformArrayControls(){
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  addNewIngredients(){
    (this.recipeForm.get('ingredients') as FormArray).push(new FormGroup(
      {
        'ingredientName': new FormControl(null, [Validators.required]),
        'amount': new FormControl(null, [Validators.required, Validators.min(0)])
      }))
  }

  onSubmit(){
    // console.log(this.recipeForm.get('ingredients'))

    let formRecipe = new Recipe(
      this.recipeForm.get('name').value,
      this.recipeForm.get('description').value,
      this.recipeForm.get('imagePath').value,
      (this.recipeForm.get('ingredients') as FormArray).value.map(
        (ingredient)=>{
          return new Ingredient(ingredient['ingredientName'],ingredient['amount'])
        }
      )
    )

    //  console.log(formRecipe);

    if(this.editMode){
      this.recipeService.updateRecipe(formRecipe,this.id)
    }
    else{
      this.recipeService.addNewRecipe(formRecipe)
    }
    this.router.navigate(['../'],{relativeTo: this.route})

  }

  removeIngredient(index: number){
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  onCancelForm(){
    this.router.navigate(['../'],{relativeTo: this.route})
  }

}

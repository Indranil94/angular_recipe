import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { NoRecipeSelectedComponent } from './recipes/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const routes: Routes = [
  { path: 'recipes', component: RecipesComponent,
    children: [
      { path: "", component: NoRecipeSelectedComponent},
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ]
  },
  { path: 'shoppingList', component: ShoppingListComponent},
  { path: '', redirectTo: "/recipes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

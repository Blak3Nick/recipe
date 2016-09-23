import {SampleRouteComponent} from "./sample-route/sample-route.component";

import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {MainComponent} from "./main/main.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";



const APP_ROUTES: Routes = [
  { path: 'sample', component: SampleRouteComponent },

  { path: 'user/:id', component: UserComponent},

  { path: 'recipes', component: RecipesComponent},



  { path: '', component: MainComponent}


];

export const routing = RouterModule.forRoot(APP_ROUTES);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { DropdownDirective } from './dropdown.directive';
import {LogService} from "./log.service";
import {DataService} from "./data.service";
import {ShoppingListService} from "./shopping-list.service";
import { SampleRouteComponent } from './sample-route/sample-route.component';
import { routing} from './app.routes';
import {UserComponent} from "./user/user.component";
import {UserEditComponent} from './user-edit/user-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    ShoppingListAddComponent,
    DirectivesComponent,
    HighlightDirective,
    UnlessDirective,
    DropdownDirective,
    SampleRouteComponent,
    UserComponent,
    UserEditComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LogService, DataService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Directive } from '@angular/core';
import { HeaderComponent} from "./header.component";
import { RecipesComponent} from "./recipes";
import {RecipeService} from "./recipes/recipe.service";
import {ROUTER_DIRECTIVES} from "@angular/router";


@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

}

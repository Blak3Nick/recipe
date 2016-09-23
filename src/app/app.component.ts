import { Component, Directive } from '@angular/core';
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
  title = "Angular 2 Recipe!";
}

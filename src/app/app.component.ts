import { Component } from '@angular/core';
import { HeaderComponent} from "./header.component";
import { RecipesComponent} from "./recipes";
import {RecipeService} from "./recipes/recipe.service";

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent {

}

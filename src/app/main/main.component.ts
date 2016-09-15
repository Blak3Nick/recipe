import { Component, OnInit } from '@angular/core';

import { HeaderComponent} from "../header.component";
import { RecipesComponent} from "../recipes";
import {RecipeService} from "../recipes/recipe.service";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'rb-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

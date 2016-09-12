import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../ingredient";

@Injectable()
export class RecipeService {
  private   recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty','http://res.cloudinary.com/blak3nick/image/upload/v1472839446/dummy_wpfkgm.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ] ),
    new Recipe('Stuff', 'Very stuffy','http://res.cloudinary.com/blak3nick/image/upload/v1463097161/rhino-charge-bw_p54xfb.jpg', [] )
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}

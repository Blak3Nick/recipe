import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',

})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty','http://res.cloudinary.com/blak3nick/image/upload/v1472839446/dummy_wpfkgm.jpg', [] ),
    new Recipe('Stuff', 'Very stuffy','http://res.cloudinary.com/blak3nick/image/upload/v1463097161/rhino-charge-bw_p54xfb.jpg', [] )
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}

import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',

})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy','http://res.cloudinary.com/blak3nick/image/upload/v1472839446/dummy_wpfkgm.jpg');
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}

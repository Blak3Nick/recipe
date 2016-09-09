import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../ingredient";
import {DataService} from "../data.service";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  value = '';
  items: Ingredient[] = [];
  constructor() { }
  private dataService: DataService;
  ngOnInit() {

  }

}

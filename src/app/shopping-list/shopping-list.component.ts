import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../ingredient";
import {DataService} from "../data.service";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  value = '';
  items: Ingredient[] = [];
  constructor(private sls: ShoppingListService) { }
  private dataService: DataService;
  ngOnInit() {
    this.items = this.sls.getItems();
  }

}

import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import {DataService} from "../data.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  providers: [LogService, DataService]
})
export class ShoppingListAddComponent {
  value = '';
  items: string[] = [];
  constructor(private logService: LogService, private dataService: DataService) { }

  onLog(value: string) {
    this.logService.writeToLog(value);
  }

  onStore(value: string) {
    this.dataService.addData(value);
  }
  onGet() {
    this.items = this.dataService.getData();
  }
}

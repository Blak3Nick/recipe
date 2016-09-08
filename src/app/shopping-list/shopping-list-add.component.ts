import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  providers: [LogService]
})
export class ShoppingListAddComponent implements OnInit {

  constructor(private logService: LogService ) { }

  onLog(value: string) {
    this.logService.writeToLog(value);
  }
  ngOnInit() {
  }

}

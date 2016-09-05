import { Component } from '@angular/core';

@Component({
  selector: 'rb-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {
  private switch = true;
  private items = [1, 2, 3, 4, 5];
  private value = 100;
  onSwitch() {
    this.switch = !this.switch;
  }

}

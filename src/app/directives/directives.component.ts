import { Component } from '@angular/core';

@Component({
  selector: 'rb-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {
  private switch = true;
  onSwitch() {
    this.switch = !this.switch;
  }

}

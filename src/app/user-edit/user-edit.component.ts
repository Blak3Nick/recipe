import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'rb-user-edit',
  template:`
    <h3>User Edit</h3>    
    <button class="btn btn-alert" (click)="onNavigate()">Go home</button>
`
})
export class UserEditComponent {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onNavigate() {
    this.router.navigate(['/']);
  }


}

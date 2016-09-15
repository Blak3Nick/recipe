import {Component, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {HeaderComponent} from '../header.component';

@Component({
  selector: 'rb-user',
  template: `
    <h1>User Page</h1>
    <hr>
    {{id}}
`,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnDestroy {
  id: string;
  private subscription: Subscription;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import {Component, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'rb-user',
  template: `
    <h1>User Page</h1>
    <hr>
    {{id}}
    <button (click)="onNavigate()">Press me Bitch</button>
    <rb-user-edit></rb-user-edit>
    
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
  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'analytics': 100}});
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

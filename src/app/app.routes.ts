import {SampleRouteComponent} from "./sample-route/sample-route.component";
import {Component} from "@angular/core";

// import {provideRouter} from "@angular/router";
import {RouterModule, Routes } from "@angular/router";
import {AppComponent} from "./app.component";
import {UserComponent} from "./user/user.component";

const APP_ROUTES = [
  { path: 'sample', component: SampleRouteComponent },
  { path: '', component: AppComponent},
  { path: 'user', component: UserComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);

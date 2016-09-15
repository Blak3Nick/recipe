import {SampleRouteComponent} from "./sample-route/sample-route.component";

import {RouterModule, Routes } from "@angular/router";
import {AppComponent} from "./app.component";
import {UserComponent} from "./user/user.component";
import {MainComponent} from "./main/main.component";


const APP_ROUTES = [
  { path: 'sample', component: SampleRouteComponent },

  { path: 'user/:id', component: UserComponent},

  { path: '', component: MainComponent}


];

export const routing = RouterModule.forRoot(APP_ROUTES);

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "app-root",
  directives: [ROUTER_DIRECTIVES],
  template: "<router-outlet></router-outlet>"
})

export class AppComponent {
  title = "App";
}

/*

  this code says that we want this TS file to act as our main routing outlet

  all child pages and components will flow through this file because of router-outlet tag

*/

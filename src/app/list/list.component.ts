/*
  import dependencies for use
  include router for navigation, location so we can listen for pop(backwards) events in navigation
*/

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: "app-list",
  templateUrl: "list.component.html",
  styleUrls: ["list.component.css"]
})

export class ListComponent implements OnInit {

  // by making personList public we can bind list to HTML UI, rendered in the front-end
  public personList: Array<Object>;

  // constructor initializes list
  // using html5 localStorage to store data
  // parse serialized local storage data if it exists otherwise use an empty array
  // subscribe method on location we are listening for pop (backwards) event in nav stack
  // when this happens we can reload from local storage
  constructor(private router: Router, private location: Location) {
    this.personList = localStorage.getItem("people") != null ? JSON.parse(localStorage.getItem("people")) : [];
    this.location.subscribe((path) => {
      this.personList = localStorage.getItem("people") != null ? JSON.parse(localStorage.getItem("people")) : [];
    });
  }

  ngOnInit() {}

  // create method navigates to other page/route
  create() {
    this.router.navigate(["/create"]);
  }

}

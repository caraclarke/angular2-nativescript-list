// import angular components
import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";

// define metadata
@Component({
  moduleId: module.id,
  selector: "app-create",
  templateUrl: "create.component.html",
  styleUrls: ["create.component.css"]
})

export class CreateComponent implements OnInit {

  public personList: Array<Object>;
  public firstname: string;
  public lastname: string;

  // initialize variables and pull any existing person data from local storage
  constructor(private location: Location) {
    this.personList = localStorage.getItem("people") != null ? JSON.parse(localStorage.getItem("people")) : [];
    this.firstname = "";
    this.lastname = "";
  }

  ngOnInit() {}

  // check that firstname and lastname arent empty
  // if they are filled out
    // push new object into personlist array
    // re-save serialized version of array
    // then pop (back) in nav stack
  save() {
    if (this.firstname != "" && this.lastname != "") {
      this.personList.push({
        firstname: this.firstname,
        lastname: this.lastname
      });
      localStorage.setItem("people", JSON.stringify(this.personList));
      this.location.back();
    }
  }

}

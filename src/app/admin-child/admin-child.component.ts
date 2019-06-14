import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

import { Child } from "../child/child.model";
import { ChildService } from "../child/child.service";

@Component({
  selector: "admin-child",
  templateUrl: "./admin-child.component.html",
  styleUrls: ["./admin-child.component.css"]
})
export class AdminChildComponent implements OnInit {
  children: Child[];

  constructor(private childService: ChildService, private location: Location) { }

  ngOnInit() {
    this.fetchChildren();
  }

  goBack(): void {
    this.location.back();
  }

  fetchChildren() {
    this.childService.getChildren().subscribe(children => {
      this.children = children;
    });
  }

  deleteChild(child) {
    this.childService.deleteChild(child).subscribe(() => {
      this.children = this.children.filter(c => c !== child);
    });
  }
}

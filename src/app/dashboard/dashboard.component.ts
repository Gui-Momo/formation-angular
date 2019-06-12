import { Component, OnInit } from '@angular/core';

import { Child } from "../child/child.model";
import { ChildService } from "../child/child.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  children: Child[];

  constructor(private childService: ChildService) { }

  ngOnInit() {
    this.childService.getChildren().subscribe(children => {
      this.children = children;
    });
  }

}

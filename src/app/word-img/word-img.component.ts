import { Component, OnInit, Input } from '@angular/core';

import { RoundedImgComponent } from "../rounded-img/rounded-img.component";

@Component({
  selector: 'app-word-img',
  templateUrl: "../rounded-img/rounded-img.component.html",
  styleUrls: ["../rounded-img/rounded-img.component.css"]
})
export class WordImgComponent extends RoundedImgComponent implements OnInit {

  ngOnInit() {
  }

}

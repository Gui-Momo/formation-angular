import { Component, OnInit, Input } from '@angular/core';

import { GraphemeComponent } from "../grapheme/grapheme.component";

@Component({
  selector: 'app-board-grapheme',
  template: '../grapheme/grapheme.component.html',
  styleUrls: ['./board-grapheme.component.css', "../grapheme/grapheme.component.css"]
})
export class BoardGraphemeComponent extends GraphemeComponent implements OnInit {

  @Input() type: string;

  ngOnInit() {
  }
}

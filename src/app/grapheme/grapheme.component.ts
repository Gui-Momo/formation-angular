import { Component, OnInit, Input } from '@angular/core';

import { Grapheme } from "./grapheme.model";

@Component({
  selector: 'app-grapheme',
  templateUrl: './grapheme.component.html',
  styleUrls: ['./grapheme.component.css']
})
export class GraphemeComponent implements OnInit {

  @Input() grapheme: Grapheme;

  constructor() { }

  ngOnInit() {
  }
}

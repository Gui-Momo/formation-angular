import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grapheme',
  template: '{{representation}}',
  styleUrls: ['./grapheme.component.css']
})
export class GraphemeComponent implements OnInit {

  @Input() representation: string;

  constructor() { }

  ngOnInit() {
  }

}

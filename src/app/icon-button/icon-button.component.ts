import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {

  @Input() name: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}

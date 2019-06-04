import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rounded-img',
  templateUrl: './rounded-img.component.html',
  styleUrls: ['./rounded-img.component.css']
})
export class RoundedImgComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}

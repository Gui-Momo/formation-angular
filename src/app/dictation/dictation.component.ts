import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dictation',
  templateUrl: './dictation.component.html',
  styleUrls: ['./dictation.component.css']
})
export class DictationComponent implements OnInit {

  currentWord = "pamplemousse";
  currentChild = "child";

  boardGraphemes = Array.from("aeéèêiïîoôuybcçdfghjklmnpqrstvwxz");

  graphemeRow(num: number) {
    const rowLength = 11;
    const start = num * rowLength;
    return this.boardGraphemes.slice(start, start + rowLength);
  }

  constructor() { }

  ngOnInit() {
  }

}

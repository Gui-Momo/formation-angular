import { Component, OnInit, Input } from '@angular/core';
import { IconButtonComponent } from "../icon-button/icon-button.component";
import { Word } from '../word/word.model';

@Component({
  selector: 'app-reveal-button',
  templateUrl: "./reveal-button.component.html",
  styleUrls: ['./reveal-button.component.css']
})
export class RevealButtonComponent extends IconButtonComponent implements OnInit {

  name = "eye";
  currentWord = '';
  @Input() word: Word;

  ngOnInit() {
  }

  toggleWord() {
    if (this.name === "eye") {
      this.name = "";
      this.currentWord = this.word.fileName;
    } else {
      this.name = "eye";
      this.currentWord = "";
    }
  }
}

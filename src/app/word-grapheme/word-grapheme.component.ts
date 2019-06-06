import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GraphemeComponent } from "../grapheme/grapheme.component";
import { WordGrapheme } from './word-grapheme.model';

@Component({
  selector: 'app-word-grapheme',
  templateUrl: './word-grapheme.component.html',
  styleUrls: ['./word-grapheme.component.css', "../grapheme/grapheme.component.css"]
})
export class WordGraphemeComponent extends GraphemeComponent implements OnInit {

  @Input() grapheme: WordGrapheme;

  @Output() found: EventEmitter<WordGrapheme> = new EventEmitter();

  ngOnInit() {
  }

  playPhonemSound() {
    if (!this.grapheme.isMute) {
      return super.playPhonemSound();
    }
    return Promise.resolve({});
  }

  onDrop(droppedGrapheme: any, wordGrapheme: WordGrapheme) {
    if (droppedGrapheme._representation === wordGrapheme.representation) {
      wordGrapheme.isFound = true;
      this.soundService.playSound("juste").then(() => {
        this.found.emit(wordGrapheme);
      });
    } else {
      this.soundService.playSound("faux");
    }
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GraphemeComponent } from "../grapheme/grapheme.component";
import { WordGrapheme } from './word-grapheme.model';
import { Config } from '../config/config.model';

@Component({
  selector: 'app-word-grapheme',
  templateUrl: './word-grapheme.component.html',
  styleUrls: ['./word-grapheme.component.css', "../grapheme/grapheme.component.css"]
})
export class WordGraphemeComponent extends GraphemeComponent implements OnInit {

  @Input() grapheme: WordGrapheme;
  @Input() config: Config;

  @Output() found: EventEmitter<WordGrapheme> = new EventEmitter();

  ngOnChanges() {
  }

  ngOnInit() {
    this.applyConfig();
  }

  applyConfig() {
    let graphemes = Array.from(document.getElementsByClassName('grapheme') as HTMLCollectionOf<HTMLElement>);
    if ((this.config.areComplexGraphemesDisplayed && this.grapheme.representation.length > 1 && !this.grapheme.representation.includes("_"))
      || (this.config.areMutedGraphemesDisplayed && this.grapheme.isMute)) {
      this.grapheme.setIsFound(true);
    }
    if (!this.config.isCursiveFont) {
      graphemes.forEach(grapheme => {
        grapheme.style.fontFamily = "sans-serif";
      });
    }
    if (this.config.isUpperCase && !this.config.isCursiveFont) {
      graphemes.forEach(grapheme => {
        grapheme.style.textTransform = "uppercase";
      });
    }
  }

  playPhonemSound() {
    if (!this.grapheme.isMute) {
      return super.playPhonemSound();
    }
    return Promise.resolve({});
  }

  onDrop(droppedGrapheme: any, wordGrapheme: WordGrapheme) {
    if (!this.config.useAccents) {
      if ((droppedGrapheme._representation == 'a' && wordGrapheme.representation == 'â') ||
        (droppedGrapheme._representation == 'e' && wordGrapheme.representation == 'é') ||
        (droppedGrapheme._representation == 'e' && wordGrapheme.representation == 'è') ||
        (droppedGrapheme._representation == 'e' && wordGrapheme.representation == 'ê') ||
        (droppedGrapheme._representation == 'i' && wordGrapheme.representation == 'î') ||
        (droppedGrapheme._representation == 'i' && wordGrapheme.representation == 'ï') ||
        (droppedGrapheme._representation == 'c' && wordGrapheme.representation == 'ç')) {
        wordGrapheme.setIsFound(true);
        this.soundService.playSound("juste").then(() => {
          this.found.emit(wordGrapheme);
        });
      }
    }
    if (droppedGrapheme._representation === wordGrapheme.representation) {
      wordGrapheme.setIsFound(true);
      this.soundService.playSound("juste").then(() => {
        this.found.emit(wordGrapheme);
      });
    } else {
      this.soundService.playSound("faux");
    }
  }
}

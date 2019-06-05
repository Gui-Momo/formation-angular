import { Component, OnInit } from '@angular/core';

import { Grapheme } from "../grapheme/grapheme.model";
import {
  GraphemeService,
  LanguageGraphemes
} from "../grapheme/grapheme.service";
import { SoundService } from '../sound/sound.service';

@Component({
  selector: 'app-dictation',
  templateUrl: './dictation.component.html',
  styleUrls: ['./dictation.component.css']
})
export class DictationComponent implements OnInit {

  currentWord = "pamplemousse";
  currentChild = "child";
  graphemes: LanguageGraphemes;
  boardGraphemes: Grapheme[];

  graphemeRow(num: number) {
    const rowLength = 11;
    const start = num * rowLength;
    return this.boardGraphemes.slice(start, start + rowLength);
  }

  constructor(
    private graphemeService: GraphemeService,
    private soundService: SoundService
  ) { }

  ngOnInit() {
    this.graphemes = this.graphemeService.getGraphemes();
    this.boardGraphemes = [
      ...this.graphemes.vowels,
      ...this.graphemes.consonants
    ];
  }
}

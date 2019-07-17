import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";

import { Grapheme } from "../grapheme/grapheme.model";
import {
  GraphemeService,
  LanguageGraphemes
} from "../grapheme/grapheme.service";
import { SoundService } from '../sound/sound.service';
import { Word } from '../word/word.model';
import { WordService } from '../word/word.service';
import { ChildService } from '../child/child.service';
import { ActivatedRoute } from '@angular/router';
import { Child } from '../child/child.model';
import { Config } from '../config/config.model';
import { ConfigService } from '../config/config.service';

enum GraphemeType {
  simple,
  complex
}

@Component({
  selector: 'app-dictation',
  templateUrl: './dictation.component.html',
  styleUrls: ['./dictation.component.css']
})
export class DictationComponent implements OnInit {

  @Input() currentWord: Word;
  currentChild: Child;
  currentConfig: Config;
  words: Word[];
  graphemes: LanguageGraphemes;
  boardGraphemes: Grapheme[];
  boardGraphemesType: GraphemeType = GraphemeType.simple;
  boardButtonText = " Ou, Oi, Eau";
  boardArrowOrientation = "right";

  graphemeRow(num: number) {
    const rowLength = 11;
    const start = num * rowLength;
    return this.boardGraphemes.slice(start, start + rowLength);
  }

  constructor(
    private graphemeService: GraphemeService,
    private wordService: WordService,
    private soundService: SoundService,
    private location: Location,
    private childService: ChildService,
    private route: ActivatedRoute,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if (id !== null) {
      this.childService.getChild(+id).subscribe(child => {
        this.currentChild = child;
        // TODO : get child's config inside childService
        this.configService
          .getConfig(child.configId)
          .subscribe(config => (this.currentConfig = config));
      });
    }

    this.graphemes = this.graphemeService.getGraphemes();
    this.boardGraphemes = [
      ...this.graphemes.vowels,
      ...this.graphemes.consonants
    ];
    this.wordService.getWords().subscribe(words => {
      this.words = words;
      this.setRandomCurrentWord();
    });
  }

  setRandomCurrentWord() {
    const pos = Math.floor(Math.random() * this.words.length);
    this.currentWord = this.words[pos];
    this.wordService.checkImage(this.currentWord);
  }

  toggleBoardGraphemes() {
    if (this.boardGraphemesType === GraphemeType.simple) {
      this.boardGraphemes = this.graphemes.complexes;
      this.boardButtonText = "a, â, e";
      this.boardArrowOrientation = "left";
      this.boardGraphemesType = GraphemeType.complex;
    } else {
      this.boardGraphemes = [
        ...this.graphemes.vowels,
        ...this.graphemes.consonants
      ];
      this.boardButtonText = "Ou, Oi, Eau";
      this.boardArrowOrientation = "right";
      this.boardGraphemesType = GraphemeType.simple;
    }
  }
}

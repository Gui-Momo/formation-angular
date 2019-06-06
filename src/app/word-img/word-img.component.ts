import { Component, OnInit, Input } from '@angular/core';

import { RoundedImgComponent } from "../rounded-img/rounded-img.component";

import { SoundService } from "../sound/sound.service";
import { Word } from '../word/word.model';

@Component({
  selector: 'app-word-img',
  templateUrl: "./word-img.component.html",
  styleUrls: ["../rounded-img/rounded-img.component.css"]
})
export class WordImgComponent extends RoundedImgComponent implements OnInit {

  @Input() word: Word;

  constructor(private soundService: SoundService) {
    super();
  }

  playWordSound() {
    this.soundService.playSound(`words/${this.word.fileName}`);
  }

  ngOnInit() {
  }
}

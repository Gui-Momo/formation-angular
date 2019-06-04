import { Component, OnInit, Input } from '@angular/core';

import { RoundedImgComponent } from "../rounded-img/rounded-img.component";

import { SoundService } from "../sound/sound.service";

@Component({
  selector: 'app-word-img',
  templateUrl: "./word-img.component.html",
  styleUrls: ["../rounded-img/rounded-img.component.css"]
})
export class WordImgComponent extends RoundedImgComponent implements OnInit {

  constructor(private soundService: SoundService) {
    super();
  }

  playWordSound() {
    this.soundService.playSound("words/éléphant");
  }

  ngOnInit() {
  }
}

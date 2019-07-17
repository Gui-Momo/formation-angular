import { Component, OnInit, Input } from '@angular/core';

import { Grapheme } from "./grapheme.model";
import { SoundService } from '../sound/sound.service';
import { WordGrapheme } from '../word-grapheme/word-grapheme.model';

@Component({
  selector: 'app-grapheme',
  templateUrl: './grapheme.component.html',
  styleUrls: ['./grapheme.component.css']
})
export class GraphemeComponent implements OnInit {

  @Input() grapheme: Grapheme;

  constructor(private _soundService: SoundService) { }

  ngOnChanges() {
    // let graphemes = Array.from(document.getElementsByClassName('grapheme') as HTMLCollectionOf<HTMLElement>);
    // console.log(graphemes);
    // if (this.config.isCursiveFont) {
    //   graphemes.forEach(grapheme => {
    //     console.log(grapheme);
    //     grapheme.style.fontFamily = "Cursive standard";
    //   });
    // }
  }

  ngOnInit() {

  }

  playPhonemSound() {
    this.soundService.playSound(`phonems/${this.grapheme.phonems[0]}`);
  }

  get soundService() {
    return this._soundService;
  }
}

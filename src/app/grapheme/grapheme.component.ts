import { Component, OnInit, Input } from '@angular/core';

import { Grapheme } from "./grapheme.model";
import { SoundService } from '../sound/sound.service';

@Component({
  selector: 'app-grapheme',
  templateUrl: './grapheme.component.html',
  styleUrls: ['./grapheme.component.css']
})
export class GraphemeComponent implements OnInit {

  @Input() grapheme: Grapheme;

  constructor(private soundService: SoundService) { }

  ngOnInit() {
  }

  playPhonemSound() {
    this.soundService.playSound(`phonems/${this.grapheme.phonems[0]}`);
  }
}

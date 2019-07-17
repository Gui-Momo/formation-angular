import { Component, OnInit, Input } from '@angular/core';

import { GraphemeComponent } from "../grapheme/grapheme.component";
import { Config } from '../config/config.model';

@Component({
  selector: 'app-board-grapheme',
  templateUrl: './board-grapheme.component.html',
  styleUrls: ['./board-grapheme.component.css', "../grapheme/grapheme.component.css"]
})
export class BoardGraphemeComponent extends GraphemeComponent implements OnInit {

  @Input() type: string;
  @Input() config: Config;

  ngOnChanges() {
    let graphemes = Array.from(document.getElementsByClassName('grapheme') as HTMLCollectionOf<HTMLElement>);
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

  ngOnInit() {
  }
}

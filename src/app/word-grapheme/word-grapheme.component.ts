import { Component, OnInit, Input } from '@angular/core';

import { GraphemeComponent } from "../grapheme/grapheme.component";
import { WordGrapheme } from './word-grapheme.model';

@Component({
  selector: 'app-word-grapheme',
  templateUrl: './word-grapheme.component.html',
  styleUrls: ['./word-grapheme.component.css', "../grapheme/grapheme.component.css"]
})
export class WordGraphemeComponent extends GraphemeComponent implements OnInit {

  @Input() grapheme: WordGrapheme;

  ngOnInit() {
  }

}

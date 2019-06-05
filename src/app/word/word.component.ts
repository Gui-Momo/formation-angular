import { Component, OnInit, Input } from '@angular/core';
import { WordGrapheme } from '../word-grapheme/word-grapheme.model';
import { Word } from './word.model';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  @Input() word: Word;
  @Input() grapheme: WordGrapheme;

  constructor() { }

  ngOnInit() {
  }
}

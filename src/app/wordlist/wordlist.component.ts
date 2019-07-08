import { Component, OnInit, Input } from '@angular/core';
import { Word } from '../word/word.model';
import { WordService } from '../word/word.service';
import { Location } from "@angular/common";


@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.css']
})
export class WordlistComponent implements OnInit {

  @Input() word: Word;
  words: Word[];


  constructor(
    private wordService: WordService,
    private location: Location
  ) { }

  ngOnInit() {
    this.wordService.getWords().subscribe(words => {
      this.words = words;
      console.log(words[0]._fileName);
      console.log(words[0]._imageFile);
      this.words.forEach(word => {
        console.log(this.wordService.checkImage(word));
        console.log(word);
      });
    });

  }
}

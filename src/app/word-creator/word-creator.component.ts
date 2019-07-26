import { Component, OnInit } from '@angular/core';
import { WordService } from '../word/word.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-word-creator',
  templateUrl: './word-creator.component.html',
  styleUrls: ['./word-creator.component.css']
})
export class WordCreatorComponent implements OnInit {

  constructor(private wordService: WordService,
    private location: Location) { }

  ngOnInit() {
  }

  onSubmit() {
    let inputs = document.getElementById('wordCreator') as unknown as HTMLInputElement[];
    let word: string[] = [];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value) {
        word.push(inputs[i].value);
      }
    }
    this.wordService.addWord(word);
  }
}

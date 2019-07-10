import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Word } from "./word.model";
import { WordGrapheme } from "../word-grapheme/word-grapheme.model";
import { WordGraphemeService } from "../word-grapheme/word-grapheme.service";


type wordsDesc = {
  words: string[][];
};

@Injectable()
export class WordService {

  constructor(
    private wordGraphemeService: WordGraphemeService,
    private http: HttpClient
  ) { }

  private createWordFromDescription(wordDesc) {
    const wordGr: WordGrapheme[] = [];

    for (let desc of wordDesc) {
      wordGr.push(this.wordGraphemeService.createFromDescription(desc));
    }
    return new Word(wordGr);
  }

  getWords(): Observable<Word[]> {
    return this.http.get<wordsDesc>("/assets/data/words-fr.json").pipe(
      map(data => {
        return data.words.map(wordDesc => {
          return this.createWordFromDescription(wordDesc);
        });
      })
    );
  }

  checkImage(word) {
    let file = word._imageFile;
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', file, false);
    xhr.send();
    if (xhr.status == 404) {
      return false;
    } else {
      return true;
    }
  }

}
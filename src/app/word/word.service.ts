import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Word } from "./word.model";
import { WordGrapheme } from "../word-grapheme/word-grapheme.model";
import { WordGraphemeService } from "../word-grapheme/word-grapheme.service";


type wordsDesc = {
  words: string[][];
};

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
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

  getUnaccentedWords(words) {
    const unaccentedWords = words.filter(this.filterAccentedWords);
    return unaccentedWords;
  }

  filterAccentedWords(word) {
    if (word._fileName.includes('â') ||
      word._fileName.includes('é') ||
      word._fileName.includes('è') ||
      word._fileName.includes('ê') ||
      word._fileName.includes('î') ||
      word._fileName.includes('ï') ||
      word._fileName.includes('ç')) {
      return;
    } else {
      return word;
    }
  }

  getSimpleGraphemsWords(words, complexGraphemes) {
    const simpleGraphemsWords = words.filter(word => {
      if (complexGraphemes.some(graph => word._fileName.includes(graph._representation))) {
        return;
      } else {
        return word;
      }
    });
    return simpleGraphemsWords;
  }

  getUnmutedGraphemsWords(words) {
    const unmutedGraphemsWords = words.filter(this.filterMutedGraphemsWords);
    return unmutedGraphemsWords;
  }

  filterMutedGraphemsWords(word) {
    let mute = false;
    word._graphemes.forEach(gr => {
      if (gr._isMute) {
        mute = true;
      }
    });
    if (mute) {
      return;
    } else {
      return word;
    }
  }

  checkImage(word) {
    let file = word._imageFile;
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', file + '.png', false);
    xhr.send();
    if (xhr.status !== 404) {
      word.setCompleteFileName(file + '.png');
      return true;
    } else {
      xhr.open('HEAD', file + '.jpg', false);
      xhr.send();
      if (xhr.status !== 404) {
        word.setCompleteFileName(file + '.jpg');
        return true;
      } else {
        xhr.open('HEAD', file + '.gif', false);
        xhr.send();
        if (xhr.status == 404) {
          return false;
        } else {
          word.setCompleteFileName(file + '.gif');
          return true;
        }
      }
    }
  }

  addWord(word) {
    console.log(word);
    this.http.post("api/words", word, httpOptions)
      .subscribe(res => {
        console.log(res);
      });
  }
}
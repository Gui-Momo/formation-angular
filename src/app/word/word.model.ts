import { WordGrapheme } from "../word-grapheme/word-grapheme.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

export class Word {
  _fileName: string;
  _imageFile: string;
  _completeFileName: string = "";
  _hasImage: boolean = false;
  _imageUrl: string = "";
  constructor(private _graphemes: WordGrapheme[]) {
    this._fileName = this._graphemes.reduce(
      (fileName, g) => `${fileName}${g.representation}`,
      ""
    );
    this._imageFile = "assets/img/" + this._fileName;
  }

  get graphemes() {
    return this._graphemes;
  }

  setGraphemes(graph) {
    this._graphemes = graph;
  }

  get fileName() {
    return this._fileName;
  }

  get completeFileName() {
    return this._completeFileName;
  }

  setCompleteFileName(fileName) {
    this._completeFileName = fileName;
  }

  get imageUrl() {
    return this._imageUrl;
  }

  setImageUrl(url) {
    this._imageUrl = url;
  }

  get hasImage() {
    return this._hasImage;
  }

  setHasImage(value) {
    this._hasImage = value;
  }

  isFound() {
    return this._graphemes.every(g => g.isFound);
  }
}
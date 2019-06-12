import { WordGrapheme } from "../word-grapheme/word-grapheme.model";

export class Word {
  _fileName: string;
  constructor(private _graphemes: WordGrapheme[]) {
    this._fileName = this._graphemes.reduce(
      (fileName, g) => `${fileName}${g.representation}`,
      ""
    );
  }

  get graphemes() {
    return this._graphemes;
  }

  get fileName() {
    return this._fileName;
  }

  isFound() {
    return this._graphemes.every(g => g.isFound);
  }
}
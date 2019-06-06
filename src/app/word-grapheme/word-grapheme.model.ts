import { Grapheme, GraphemeType } from "../grapheme/grapheme.model";

export class WordGrapheme extends Grapheme {
  constructor(
    graphemeType: GraphemeType,
    // a word grapheme has only one phonem
    phonem: string,
    representation: string,
    private _isMute: boolean = false,
    private _isFound: boolean = false
  ) {
    super(graphemeType, [phonem], representation);
    if (this._isMute) this.color = "grey";
  }

  get isFound() {
    return this._isFound;
  }

  get isMute() {
    return this._isMute;
  }

  set isFound(found) {
    this._isFound = found;
  }
}
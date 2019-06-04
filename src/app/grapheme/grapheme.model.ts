export enum GraphemeType {
  vowel,
  consonant,
  complex
}

export class Grapheme {
  protected color: string;

  constructor(
    private graphemeType: GraphemeType,
    //A grapheme can represent several phonems
    //ie : the letter "e" in French
    private phonems: string[],
    private _representation: string
  ) {
    switch (this.graphemeType) {
      case GraphemeType.vowel:
        this.color = "blue";
        break;
      case GraphemeType.consonant:
        this.color = "red";
        break;
      case GraphemeType.complex:
        this.color = "green";
        break;
      default:
        this.color = "blue";
        break;
    }
  }

  get representation() {
    return this._representation;
  }
}
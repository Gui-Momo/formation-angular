import { Injectable } from "@angular/core";

import {
  GraphemeService,
  LanguageGraphemes
} from "../grapheme/grapheme.service";
import { GraphemeType } from "../grapheme/grapheme.model";
import { WordGrapheme } from "../word-grapheme/word-grapheme.model";

@Injectable()
export class WordGraphemeService {
  graphemes: LanguageGraphemes;

  constructor(private graphemeService: GraphemeService) {
    this.graphemes = this.graphemeService.getGraphemes();
  }

  private getWordGraphemeType(description) {
    if (description.length > 1 && !description.includes("_")) {
      return GraphemeType.complex;
    }
    const isVowel = this.graphemes.vowels.some(
      v => v.representation === description.charAt(0)
    );
    return isVowel ? GraphemeType.vowel : GraphemeType.consonant;
  }

  // graphems that sounds differently contains a '_'
  // and the second part is the phonem
  // Note that muted words don't have phonems
  private getWordGraphemePhonem(description) {
    return description.split("_").pop();
  }

  // graphems that sounds differently contains a '_'
  // and the first part is their representation
  private getWordGraphemeRepresentation(description) {
    return description.split("_").shift();
  }

  // Muted graphems ends with a '_' (ie 'e_' for graine)
  private isMuted(description) {
    return description.endsWith("_");
  }

  createFromDescription(description) {
    return new WordGrapheme(
      this.getWordGraphemeType(description),
      this.getWordGraphemePhonem(description),
      this.getWordGraphemeRepresentation(description),
      this.isMuted(description)
    );
  }
}
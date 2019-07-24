import { Injectable } from "@angular/core";

import { Grapheme, GraphemeType } from "./grapheme.model";

import { GRAPHEMES } from "./grapheme-fr";

export type LanguageGraphemes = {
  vowels: Grapheme[];
  consonants: Grapheme[];
  complexes: Grapheme[];
};

@Injectable()
export class GraphemeService {
  private createGrapheme(type, representation) {
    let phonems;
    if (GRAPHEMES.multipleSoundsGraphemes[representation] != null) {
      phonems = GRAPHEMES.multipleSoundsGraphemes[representation];
    } else {
      phonems = [representation];
    }
    return new Grapheme(type, phonems, representation);
  }

  getGraphemes() {
    const graphemes: LanguageGraphemes = {
      vowels: [],
      consonants: [],
      complexes: []
    };

    GRAPHEMES.vowels.forEach(representation => {
      graphemes.vowels.push(this.createGrapheme(GraphemeType.vowel, representation));
    });

    GRAPHEMES.consonants.forEach(representation => {
      graphemes.consonants.push(
        this.createGrapheme(GraphemeType.consonant, representation)
      );
    });

    GRAPHEMES.complexes.forEach(representation => {
      graphemes.complexes.push(this.createGrapheme(GraphemeType.complex, representation));
    });

    return graphemes;
  }

  removeAccents() {
    const graphemes = this.getGraphemes();
    const filteredVowels = graphemes.vowels.filter(this.filterVowels);
    const filteredConsonants = graphemes.consonants.filter(this.filterConsonants);
    const filteredGraphemes: LanguageGraphemes = {
      vowels: [],
      consonants: [],
      complexes: []
    }
    filteredVowels.forEach(grapheme => {
      filteredGraphemes.vowels.push(grapheme);
    });

    filteredConsonants.forEach(grapheme => {
      filteredGraphemes.consonants.push(grapheme);
    });

    GRAPHEMES.complexes.forEach(representation => {
      filteredGraphemes.complexes.push(this.createGrapheme(GraphemeType.complex, representation));
    });

    return filteredGraphemes;
  }

  filterVowels(gr) {
    if (gr.representation == 'â' ||
      gr.representation == 'é' ||
      gr.representation == 'è' ||
      gr.representation == 'ê' ||
      gr.representation == 'ï' ||
      gr.representation == 'î') {
      return;
    } else {
      return gr.representation;
    }
  }

  filterConsonants(gr) {
    if (gr.representation == 'ç') {
      return;
    } else {
      return gr.representation;
    }
  }
}
export type Config = {
  id: number;
  isAlphabeticOrder: boolean;
  isCursiveFont: boolean;
  isUpperCase: boolean;
  areMutedGraphemesDisplayed: boolean;
  areComplexGraphemesDisplayed: boolean;
  areComplexGraphemesGrouped: boolean;
  useAccents: boolean;
  filterWordsWithMutedGraphemes: boolean;
  filterWordsWithComplexGraphemes: boolean;
  filterWordsWithAccents: boolean;
};
export interface WordBase {
  text: string;
  translation: string;
}
export interface Word extends WordBase {
  id: string;
}
export interface IDaily extends WordBase {
  words: Word[];
}

export interface IDailyForm extends IDaily {
  highlights: string[];
}

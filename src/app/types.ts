export interface Base {
  text: string;
  translation: string;
}
export interface IWord extends Base {
  id: string;
}
export interface IGrammar extends Base {
  id: string;
  title: string;
  description: string;
}

export interface IDaily extends Base {
  words: IWord[];
  grammars: IGrammar[];
}

export interface IDailyForm extends IDaily {
  highlights: string[];
}

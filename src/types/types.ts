export interface User {
  username: string;
  password?: string;
}
export interface Word {
  id: string;
  text: string;
  translation: string;
}
export interface Grammar {
  id: string;
  title: string;
  description: string;
  text: string;
  translation: string;
}
export interface Daily {
  id: string;
  text: string;
  translation: string;
  words: Word[];
  grammars: Grammar[];
}

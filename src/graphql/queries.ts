import { gql } from '@apollo/client';

export const FETCH_DAILIES_QUERY = gql`
  query FetchDailies {
    dailies {
      id
      text
      translation
      words {
        id
        text
      }
      grammars {
        id
        text
      }
    }
  }
`;

export const QUERY_WORD_SEARCH = gql`
  query SearchWord($word: WordRequest) {
    words: searchWord(word: $word) {
      id
      text
      translation
    }
  }
`;

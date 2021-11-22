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

export const SEARCH_WORD_QUERY = gql`
  query SearchWord($word: WordRequest) {
    words: searchWord(word: $word) {
      id
      text
      translation
    }
  }
`;

export const FETCH_WORD_QUERY = gql`
  query FetchWords {
    words {
      id
      text
      translation
    }
  }
`;

import { gql } from '@apollo/client';

export const ADD_DAILY_MUTATION = gql`
  mutation AddDaily($input: AddDailyInput) {
    addDaily(input: $input) {
      id
      text
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

export const DELETE_DAILY_MUTATION = gql`
  mutation deleteDaily($deleteDailyId: ID!) {
    deleteDaily(id: $deleteDailyId)
  }
`;

export const DELETE_WORD_MUTATION = gql`
  mutation deleteWord($deleteWordId: ID!) {
    deleteWord(id: $deleteWordId)
  }
`;

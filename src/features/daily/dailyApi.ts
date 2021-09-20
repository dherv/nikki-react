import { client } from '../../apollo-client';
import { ADD_DAILY_QUERY } from '../../graphql/mutations';
import { FETCH_DAILIES_QUERY, QUERY_WORD_SEARCH } from '../../graphql/queries';

export const fetchDailies = () =>
  client
    .query({ query: FETCH_DAILIES_QUERY })
    .then((response) => response.data.dailies);

export const addDaily = (payload: any) => {
  console.log({ payload });
  return client.mutate({
    mutation: ADD_DAILY_QUERY,
    variables: { input: payload },
  });
};

export const searchWord = ({ payload }: any) => {
  return client
    .query({ query: QUERY_WORD_SEARCH, variables: { word: payload } })
    .then((response) => {
      console.log({ response });
      return response.data.words;
    });
};

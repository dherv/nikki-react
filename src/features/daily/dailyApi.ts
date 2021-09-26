import { client } from '../../apollo-client';
import { ADD_DAILY_QUERY } from '../../graphql/mutations';
import { FETCH_DAILIES_QUERY, QUERY_WORD_SEARCH } from '../../graphql/queries';
import { Daily, Word } from '../../types/types';

export const fetchDailies = (): Promise<Daily[]> =>
  client
    .query({ query: FETCH_DAILIES_QUERY })
    .then((response) => response.data.dailies);

export const addDaily = (payload: any): Promise<any> =>
  client.mutate({
    mutation: ADD_DAILY_QUERY,
    variables: { input: payload },
  });

export const searchWord = ({ payload }: { payload: Word }): Promise<Word[]> =>
  client
    .query({ query: QUERY_WORD_SEARCH, variables: { word: payload } })
    .then((response) => {
      return response.data.words;
    });

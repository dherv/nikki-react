import { client } from '../../apollo-client';
import {
  ADD_DAILY_MUTATION,
  DELETE_DAILY_MUTATION,
  DELETE_WORD_MUTATION,
} from '../../graphql/mutations';
import {
  FETCH_DAILIES_QUERY,
  FETCH_WORD_QUERY,
  SEARCH_WORD_QUERY,
} from '../../graphql/queries';
import { Daily, Word } from '../../types/types';

// MUTATIONS
export const addDaily = (payload: unknown): Promise<any> =>
  client
    .mutate({
      mutation: ADD_DAILY_MUTATION,
      variables: { input: payload },
    })
    .then(({ data }) => data.addDaily);

export const deleteDaily = (id: string): Promise<any> => {
  return client
    .mutate({
      mutation: DELETE_DAILY_MUTATION,
      variables: { deleteDailyId: id },
    })
    .then(({ data }) => data.deleteDaily);
};

export const deleteWord = (id: string): Promise<any> => {
  return client
    .mutate({
      mutation: DELETE_WORD_MUTATION,
      variables: { deleteWordId: id },
    })
    .then(({ data }) => data.deleteWord);
};

// TODO: remove the fetchPolicy
// the data is cached in store but let see to replace the data layer with graphql in future (means remove redux-saga)

// QUERIES
export const fetchDailies = (): Promise<Daily[]> =>
  client
    .query({ query: FETCH_DAILIES_QUERY, fetchPolicy: "network-only" })
    .then((response) => response.data.dailies);

export const searchWord = ({ payload }: { payload: Word }): Promise<Word[]> =>
  client
    .query({
      query: SEARCH_WORD_QUERY,
      variables: { word: payload },
      fetchPolicy: "network-only",
    })
    .then((response) => response.data.words);

export const fetchWords = (): Promise<unknown> => {
  return client
    .query({ query: FETCH_WORD_QUERY, fetchPolicy: "network-only" })
    .then((response) => response.data.words);
};

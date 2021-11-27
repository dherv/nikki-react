// src/mocks/handlers.js
import { graphql } from 'msw';
import { dailyList, wordList } from './';

export const handlers = [
  graphql.query("FetchDailies", (req, res, ctx) => {
    return res(
      ctx.data({
        dailies: dailyList,
      })
    );
  }),

  graphql.query("FetchWords", (req, res, ctx) => {
    return res(
      ctx.data({
        words: wordList,
      })
    );
  }),

  graphql.mutation("AddDaily", (req, res, ctx) => {
    const { variables } = req.body as any;
    const newDaily = {
      id: "3",
      text: variables.input.text,
      translation: "",
      words: [],
      grammars: [],
      __typename: "Daily",
    };

    // add the item so it gets in the list in next call
    // dailyList = [newDaily, ...dailyList];
    return res(
      ctx.data({
        addDaily: newDaily,
      })
    );
  }),
];

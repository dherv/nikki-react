import { RootStateOrAny } from 'react-redux';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { IDailyForm, IGrammar, IWord } from '../../app/types';
import { Daily } from '../../types/types';

interface InitialState {
  loading: boolean;
  error: string | null;
  addLoading: boolean;
  addError: string | null;
  data: Daily[];
  form: IDailyForm;
  selectedWord: string;
  delete: { loading: boolean; error: string | null };
  search: {
    words: IWord[];
    grammars: IGrammar[];
    loading: boolean;
    error: string | null;
  };
  words: {
    data: IWord[];
    loading: boolean;
    error: string | null;
  };
}
const initialState: InitialState = {
  loading: false,
  error: null,
  addLoading: false,
  addError: null,
  selectedWord: "",
  data: [],
  delete: { loading: false, error: null },
  form: {
    text: "",
    translation: "",
    words: [],
    grammars: [],
    highlights: [],
  },
  search: { words: [], grammars: [], loading: false, error: null },
  words: { data: [], loading: false, error: null },
};
export const dailySlice = createSlice({
  name: "daily",
  initialState: initialState,
  reducers: {
    fetchDailiesRequest: (state) => {
      state.loading = true;
    },
    fetchDailiesSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchDailiesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
      state.data = [];
    },
    addDailyRequest: (state) => {
      state.addLoading = true;
    },
    addDailySuccess: (state, action) => {
      state.data = [...state.data, action.payload];
      state.words.data = [...state.words.data, ...action.payload.words];
      state.addLoading = false;
      state.addError = null;
      state.form = initialState.form;
    },
    addDailyFailure: (state, action) => {
      state.addLoading = false;
      state.addError = action.payload.message;
    },
    selectedWord: (state, action) => {
      state.selectedWord = action.payload;
    },
    formAddText: (state, action) => {
      state.form.text = action.payload;
    },
    formAddTranslation: (state, action) => {
      state.form.translation = action.payload;
    },
    formAddWord: (state, action) => {
      // TODO: use prepare function to add createdAt, in order to display in creation order words and grammars
      state.form.words.push(action.payload);
      state.selectedWord = initialState.selectedWord;
    },
    formRemoveWord: (state, action) => {
      const newWords = state.form.words.filter(
        (word: IWord) => word.id !== action.payload
      );
      state.form.words = newWords;
    },
    formAddGrammar: (state, action) => {
      // TODO: use prepare function to add createdAt, in order to display in creation order words and grammars

      state.form.grammars.push(action.payload);
    },
    formAddHighlight: (state, action) => {
      state.form.highlights.push(action.payload);
    },
    dailySearchWordRequest: (state) => {
      state.search.loading = true;
    },
    dailySearchWordSuccess: (state, action) => {
      state.search.words = action.payload;
      state.search.loading = false;
      state.search.error = null;
    },
    dailySearchWordFailure: (state, action) => {
      state.search.loading = false;
      state.search.error = action.payload.message;
    },
    fetchWordsRequest: (state) => {
      state.words.loading = true;
    },
    fetchWordsSuccess: (state, action) => {
      state.words.data = action.payload;
      state.words.loading = false;
      state.words.error = null;
    },
    fetchWordsFailure: (state, action) => {
      state.words.loading = false;
      state.words.error = action.payload.message;
    },
    deleteDailyRequest: (state) => {
      state.delete.loading = true;
    },
    deleteDailySuccess: (state, action) => {
      state.data = state.data.filter((d) => d.id !== action.payload);
      state.delete.loading = false;
      state.delete.error = null;
    },
    deleteDailyFailure: (state, action) => {
      state.delete.loading = false;
      state.delete.error = action.payload.message;
    },
    deleteWordRequest: (state) => {
      state.delete.loading = true;
    },
    deleteWordSuccess: (state, action) => {
      state.words.data = state.words.data.filter(
        (w) => w.id !== action.payload
      );
      state.delete.loading = false;
      state.delete.error = null;
    },
    deleteWordFailure: (state, action) => {
      state.delete.loading = false;
      state.delete.error = action.payload.message;
    },
  },
});

export const {
  fetchDailiesSuccess,
  fetchDailiesFailure,
  fetchDailiesRequest,
  addDailyRequest,
  addDailySuccess,
  addDailyFailure,
  formAddText,
  formAddTranslation,
  formAddWord,
  formRemoveWord,
  formAddGrammar,
  formAddHighlight,
  dailySearchWordRequest,
  dailySearchWordSuccess,
  dailySearchWordFailure,
  selectedWord,
  fetchWordsRequest,
  fetchWordsSuccess,
  fetchWordsFailure,
  deleteDailyRequest,
  deleteDailySuccess,
  deleteDailyFailure,
  deleteWordRequest,
  deleteWordSuccess,
  deleteWordFailure,
} = dailySlice.actions;

export default dailySlice.reducer;

export const dailyFormSelector = createSelector(
  (state: RootStateOrAny) => state,
  (state: RootStateOrAny) => state.dailies.form
);

export const dailySelectedWord = createSelector(
  (state: RootStateOrAny) => state,
  (state: RootStateOrAny) => state.dailies.selectedWord
);

export const wordsSelector = createSelector(
  (state: RootStateOrAny) => state,
  (state: RootStateOrAny) => state.dailies.words.data
);

export const wordsLoadingSelector = createSelector(
  (state: RootStateOrAny) => state,
  (state: RootStateOrAny) => state.dailies.words.loading
);
export const wordsErrorSelector = createSelector(
  (state: RootStateOrAny) => state,
  (state: RootStateOrAny) => state.dailies.words.error
);

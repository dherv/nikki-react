import { createSlice } from '@reduxjs/toolkit';
import { IDaily, IDailyForm, IGrammar, IWord } from '../../app/types';

interface InitialState {
  loading: boolean;
  error: string | null;
  addLoading: boolean;
  addError: string | null;
  data: IDaily[];
  form: IDailyForm;
  selectedWord: string;
  search: {
    words: IWord[];
    grammars: IGrammar[];
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
  form: {
    text: "",
    translation: "",
    words: [],
    grammars: [],
    highlights: [],
  },
  search: { words: [], grammars: [], loading: false, error: null },
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
      state.error = action.payload;
      state.data = [];
    },
    addDailyRequest: (state) => {
      state.addLoading = true;
    },
    addDailySuccess: (state, action) => {
      state.addLoading = false;
      state.addError = null;
      state.form = initialState.form;
      state.data.push(action.payload.data.addDaily);
    },
    addDailyFailure: (state, action) => {
      state.addLoading = false;
      state.addError = action.payload;
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
    dailySearchWordRequest: (state, action) => {
      state.search.loading = true;
    },
    dailySearchWordSuccess: (state, action) => {
      state.search.words = action.payload;
      state.search.loading = false;
      state.search.error = null;
    },
    dailySearchWordFailure: (state, action) => {
      state.search.loading = false;
      state.search.error = action.payload;
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
} = dailySlice.actions;

export default dailySlice.reducer;

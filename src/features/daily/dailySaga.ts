import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { Grammar, Word } from '../../types/types';
import {
  addDaily,
  deleteDaily,
  deleteWord,
  fetchDailies,
  fetchWords,
  searchWord,
} from './dailyApi';
import {
  addDailyFailure,
  addDailyRequest,
  addDailySuccess,
  dailyFormSelector,
  dailySearchWordRequest,
  dailySearchWordSuccess,
  deleteDailyFailure,
  deleteDailyRequest,
  deleteDailySuccess,
  deleteWordFailure,
  deleteWordRequest,
  deleteWordSuccess,
  fetchDailiesFailure,
  fetchDailiesRequest,
  fetchDailiesSuccess,
  fetchWordsFailure,
  fetchWordsRequest,
  fetchWordsSuccess,
} from './dailySlice';

function* handleFetchDailies(): Generator {
  try {
    const payload = yield call(fetchDailies);
    yield put(fetchDailiesSuccess(payload));
  } catch (e) {
    console.error({ e });
    yield put(fetchDailiesFailure(e));
  }
}

function* handleFetchWords(): Generator {
  try {
    const payload = yield call(fetchWords);
    yield put(fetchWordsSuccess(payload));
  } catch (e) {
    console.error({ e });
    yield put(fetchWordsFailure(e));
  }
}

function* handleAddDaily(): Generator {
  type Form = {
    text: string;
    translation: string;
    words: Word[];
    grammars: Grammar[];
  };
  try {
    const form = (yield select(dailyFormSelector)) as Form;
    const dailyRequest = {
      text: form.text,
      translation: form.translation,
      word: form.words,
      grammar: form.grammars,
    };
    if (form.text) {
      const response = yield call(addDaily, dailyRequest);
      const payload = response;
      yield put(addDailySuccess(payload));
    }
  } catch (e) {
    console.error({ e });
    yield put(addDailyFailure(e));
  }
}

function* handleDailySearchWord(payload: any): Generator {
  try {
    const result = yield call(searchWord, payload);
    yield put(dailySearchWordSuccess(result));
  } catch (e) {
    console.error({ e });
    // yield put(dailySearchWordFailure(e.message));
  }
}
function* handleDeleteDaily(action: any): Generator {
  try {
    const result = yield call(deleteDaily, action.payload);
    yield put(deleteDailySuccess(result));
  } catch (e) {
    console.error({ e });
    yield put(deleteDailyFailure(e));
  }
}

function* handleDeleteWord(action: any): Generator {
  try {
    const result = yield call(deleteWord, action.payload);
    yield put(deleteWordSuccess(result));
  } catch (e) {
    console.error({ e });
    yield put(deleteWordFailure(e));
  }
}

export function* watcherDailiesSaga(): any {
  yield takeLatest(fetchDailiesRequest.type, handleFetchDailies);
  yield takeLatest(addDailyRequest.type, handleAddDaily);
  yield takeLatest(dailySearchWordRequest.type, handleDailySearchWord);
  yield takeLatest(fetchWordsRequest.type, handleFetchWords);
  yield takeLatest(deleteDailyRequest.type, handleDeleteDaily);
  yield takeLatest(deleteWordRequest.type, handleDeleteWord);
}

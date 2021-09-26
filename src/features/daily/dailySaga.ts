import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { Grammar, Word } from '../../types/types';
import { addDaily, fetchDailies, searchWord } from './dailyApi';
import {
  addDailyRequest,
  addDailySuccess,
  dailyFormSelector,
  dailySearchWordRequest,
  dailySearchWordSuccess,
  fetchDailiesRequest,
  fetchDailiesSuccess,
} from './dailySlice';

function* handleFetchDailies(): Generator {
  try {
    const payload = yield call(fetchDailies);
    yield put(fetchDailiesSuccess(payload));
  } catch (e) {
    console.error({ e });
    // yield put(fetchDailiesFailure(e.message));
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
      yield call(addDaily, dailyRequest);
      yield put(addDailySuccess());
    }
  } catch (e) {
    console.error({ e });
    // yield put(addDailyFailure(e.message));
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

export function* watcherDailiesSaga(): any {
  yield takeLatest(fetchDailiesRequest.type, handleFetchDailies);
  yield takeLatest(addDailyRequest.type, handleAddDaily);
  yield takeLatest(dailySearchWordRequest.type, handleDailySearchWord);
}

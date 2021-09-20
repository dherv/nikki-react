import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { addDaily, fetchDailies, searchWord } from './dailyApi';
import {
  addDailyRequest,
  addDailySuccess,
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
  try {
    const form: any = yield select((state) => state.dailies.form);
    if (form.text) {
      const result = yield call(addDaily, {
        text: form.text,
        translation: form.translation,
        word: form.words,
        grammar: form.grammars,
      });
      yield put(addDailySuccess(result));
    }
  } catch (e) {
    console.error({ e });
    // yield put(addDailyFailure(e.message));
  }
}

function* handleDailySearchWord(payload: any): Generator {
  try {
    const result = yield call(searchWord, payload) as any;
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

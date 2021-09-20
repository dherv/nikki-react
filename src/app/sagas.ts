import { fork } from '@redux-saga/core/effects';
import { watcherDailiesSaga } from '../features/daily/dailySaga';

export function* watcherSaga(): any {
  yield fork(watcherDailiesSaga);
}

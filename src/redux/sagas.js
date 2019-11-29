import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import instagramSagas from './instagram/saga';
import widgetSagas from './widget/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    instagramSagas(),
    widgetSagas()
  ]);
}

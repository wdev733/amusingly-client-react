import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { widgetListAPI } from '../../services/axios/api';

import {
    WIDGET_LIST
} from 'Constants/actionTypes';

import {
    widgetListSuccess
} from './actions';

const getWidgetListAsync = async () =>
    await widgetListAPI()
        .then(result => result)
        .catch(error => error);

function* getWidgetList() {

	try {
		const result = yield call(getWidgetListAsync);
        console.log(result);
        if (result.data.success == true) {
            yield put(widgetListSuccess(result.data.data));
        }

        return;
	} catch (error) {
        // catch throw
        console.log('error : ', error)
	}
}

export function* watchWigetList() {
    yield takeEvery(WIDGET_LIST, getWidgetList);
}

export default function* rootSaga() {
    yield all([
        fork(getWidgetList)
    ]);
}
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { instaImagesAPI, updateImageStatusAPI } from '../../services/axios/api';

import {
    INSTAGRAM_IMAGE_LIST,
    INSTAGRAM_IMAGE_STATUS_CHANGE
} from 'Constants/actionTypes';

import {
    instagramImageListSuccess,
    instagramImageStatusChangeSuccess
} from './actions';

const getInstagramImageListAsync = async () =>
    await instaImagesAPI()
        .then(result => result)
        .catch(error => error);

function* getInstagramImageList() {

	try {
		const result = yield call(getInstagramImageListAsync);
        
        if (result.data.success == true) {
            yield put(instagramImageListSuccess(result.data.data));
        }

        return;
	} catch (error) {
        // catch throw
        console.log('error : ', error)
	}
}

const updateInstagramImageStatusAysnc = async (instaId, status) =>
    await updateImageStatusAPI(instaId, status)
        .then(result => result)
        .catch(error => error);

function* updateInstagramImageStatus({ payload }) {

    const { instaId, status } = payload;

	try {
		const result = yield call(updateInstagramImageStatusAysnc, instaId, status);
        
        if (result.data.success == true) {
            yield put(instagramImageStatusChangeSuccess());
        }

        return;
	} catch (error) {
        // catch throw
        console.log('error : ', error)
	}
}

export function* watchInstagramImageList() {
    yield takeEvery(INSTAGRAM_IMAGE_LIST, getInstagramImageList);
}

export function* watchUpdateInstagramImageStatus() {
    yield takeEvery(INSTAGRAM_IMAGE_STATUS_CHANGE, updateInstagramImageStatus);
}

export default function* rootSaga() {
    yield all([
        fork(watchInstagramImageList),
        fork(watchUpdateInstagramImageStatus)
    ]);
}
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { widgetListAPI, widgetAddAPI, widgetGetAPI, widgetUpdateAPI } from "../../services/axios/api";

import { WIDGET_LIST, WIDGET_ADD, WIDGET_UPDATE, WIDGET_GET } from "Constants/actionTypes";

import { widgetListSuccess, widgetAddSuccess, widgetGetSuccess, widgetUpdateSuccess } from "./actions";

const getWidgetListAsync = async () =>
  await widgetListAPI()
    .then(result => result)
    .catch(error => error);

function* getWidgetList() {
  try {
    const result = yield call(getWidgetListAsync);
    if (result.data.success === true) {
      yield put(widgetListSuccess(result.data.data));
    }

    return;
  } catch (error) {
    // catch throw
    console.log("error : ", error);
  }
}

const widgetAddAsync = async (widget, imageIds) =>
  await widgetAddAPI(widget, imageIds)
    .then(result => result)
    .catch(error => error);

function* widgetAdd({ payload }) {
  
  const { widget, imageIds, history } = payload;
  try {
    const result = yield call(widgetAddAsync, widget, imageIds);

    if (result.data.success === true) {
      yield put(widgetAddSuccess());
      history.push("/embed/list");
    }

    return;
  } catch (error) {
    // catch throw
    console.log("error : ", error);
  }
}

const widgetGetAsync = async widget_id =>
  await widgetGetAPI(widget_id)
    .then(result => result)
    .catch(error => error);

function* widgetGet({ payload }) {
  
  const { widget_id } = payload;
  
  try {
    const result = yield call(widgetGetAsync, widget_id);
    if (result.data.success === true) {
      yield put(widgetGetSuccess(result.data.data));
    }

    return;
  } catch (error) {
    // catch throw
    console.log("error : ", error);
  }
}

const widgetUpdateAsync = async (widget, imageIds) =>
  await widgetUpdateAPI(widget, imageIds)
    .then(result => result)
    .catch(error => error);

function* widgetUpdate({ payload }) {
  const { widget, imageIds, history } = payload;
  try {
    const result = yield call(widgetUpdateAsync, widget, imageIds);
    
    if (result.data.success === true) {
      yield put(widgetUpdateSuccess());
      history.push("/embed/list");
    }

    return;
  } catch (error) {
    // catch throw
    console.log("error : ", error);
  }
}

export function* watchWigetList() {
  yield takeEvery(WIDGET_LIST, getWidgetList);
}

export function* watchWigetAdd() {
  yield takeEvery(WIDGET_ADD, widgetAdd);
}

export function* watchWigetUpdate() {
  yield takeEvery(WIDGET_UPDATE, widgetUpdate);
}

export function* watchWigetGet() {
  yield takeEvery(WIDGET_GET, widgetGet);
}

export default function* rootSaga() {
  yield all([
    fork(watchWigetList), 
    fork(watchWigetAdd),
    fork(watchWigetUpdate),
    fork(watchWigetGet)
  ]);
}

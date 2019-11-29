import {
  WIDGET_LIST,
  WIDGET_LIST_SUCCESS,
  WIDGET_ADD,
  WIDGET_ADD_SUCCESS,
  WIDGET_GET,
  WIDGET_GET_SUCCESS,
  WIDGET_UPDATE,
  WIDGET_UPDATE_SUCCESS
} from "Constants/actionTypes";

export const widgetList = () => ({
  type: WIDGET_LIST
});

export const widgetListSuccess = widgetList => ({
  type: WIDGET_LIST_SUCCESS,
  payload: { widgetList }
});

export const widgetAdd = (widget, history) => ({
  type: WIDGET_ADD,
  payload: { widget, history }
});

export const widgetAddSuccess = () => ({
  type: WIDGET_ADD_SUCCESS,
  payload: {}
});

export const widgetGet = widget_id => ({
  type: WIDGET_GET,
  payload: { widget_id }
});

export const widgetGetSuccess = widget => ({
  type: WIDGET_GET_SUCCESS,
  payload: { widget }
});

export const widgetUpdate = (widget, history) => ({
  type: WIDGET_UPDATE,
  payload: { widget, history }
});

export const widgetUpdateSuccess = () => ({
  type: WIDGET_UPDATE_SUCCESS,
  payload: {  }
});

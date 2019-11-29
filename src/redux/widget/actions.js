import {
  WIDGET_LIST,
  WIDGET_LIST_SUCCESS
} from 'Constants/actionTypes';

export const widgetList = () => ({
  type: WIDGET_LIST
});

export const widgetListSuccess = (widgetList) => ({
  type: WIDGET_LIST_SUCCESS,
  payload: { widgetList }
});
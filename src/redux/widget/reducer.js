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

const INIT_STATE = {
  widgetList: [],
  widgetItem: {},
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case WIDGET_LIST:
      return { ...state, loading: true };
    case WIDGET_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        widgetList: action.payload.widgetList
      };
    case WIDGET_ADD:
      return { ...state, loading: true };
    case WIDGET_ADD_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case WIDGET_GET:
      return { ...state, loading: true };
    case WIDGET_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        widgetItem: action.payload.widget
      };
    case WIDGET_UPDATE:
      return { ...state, loading: true };
    case WIDGET_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false
      };
    default:
      return { ...state };
  }
};

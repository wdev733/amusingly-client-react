import {
    WIDGET_LIST,
    WIDGET_LIST_SUCCESS
} from 'Constants/actionTypes';

const INIT_STATE = {
    widgetList: [],
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case WIDGET_LIST:
            return { ...state, loading: true };
        case WIDGET_LIST_SUCCESS:
            return { ...state, loading: false, widgetList: action.payload.widgetList };
        default: return { ...state };
    }
}

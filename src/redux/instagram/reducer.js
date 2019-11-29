import {
    INSTAGRAM_IMAGE_LIST,
    INSTAGRAM_IMAGE_LIST_SUCCESS,
    INSTAGRAM_IMAGE_STATUS_CHANGE,
    INSTAGRAM_IMAGE_STATUS_CHANGE_SUCCESS
} from 'Constants/actionTypes';

const INIT_STATE = {
    instagramImageList: [],
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case INSTAGRAM_IMAGE_LIST:
            return { ...state, loading: true };
        case INSTAGRAM_IMAGE_LIST_SUCCESS:
            return { ...state, loading: false, instagramImageList: action.payload.instagramImageList };
        case INSTAGRAM_IMAGE_STATUS_CHANGE:
            return { ...state, loading: true };
        case INSTAGRAM_IMAGE_STATUS_CHANGE_SUCCESS:
            return { ...state, loading: false };
        default: return { ...state };
    }
}

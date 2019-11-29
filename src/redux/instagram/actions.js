import {
  INSTAGRAM_IMAGE_LIST,
  INSTAGRAM_IMAGE_LIST_SUCCESS,
  INSTAGRAM_IMAGE_STATUS_CHANGE,
  INSTAGRAM_IMAGE_STATUS_CHANGE_SUCCESS
} from 'Constants/actionTypes';

export const instagramImageList = () => ({
  type: INSTAGRAM_IMAGE_LIST
});

export const instagramImageListSuccess = (instagramImageList) => ({
  type: INSTAGRAM_IMAGE_LIST_SUCCESS,
  payload: { instagramImageList }
});

export const instagramImageStatusChange = (instaId, status) => ({
  type: INSTAGRAM_IMAGE_STATUS_CHANGE,
  payload: { instaId, status }
});

export const instagramImageStatusChangeSuccess = () => ({
  type: INSTAGRAM_IMAGE_STATUS_CHANGE_SUCCESS
});
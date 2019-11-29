import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import instagram from './instagram/reducer';
import widget from './widget/reducer';

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  instagram,
  widget
});

export default reducers;
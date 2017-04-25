import { combineReducers } from 'redux';
import ui, * as fromUI from './ui';

export default combineReducers({
  ui,
})

export const getDrawerAffectedUI = state =>
  fromUI.getDrawerAffectedUI(state)


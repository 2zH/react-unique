import { combineReducers } from 'redux';
import ui, * as fromUI from './ui';
import cards, * as fromCards from './cards';

export default combineReducers({
  ui,
  cards
})

export const getDrawerAffectedUI = state => fromUI.getDrawerAffectedUI(state);
export const getContainerWidth = state => fromUI.getContainerWidth(state);
export const getCards = state => fromCards.getCards(state);
export const getCardsUI = state => fromUI.getCardsUI(state);

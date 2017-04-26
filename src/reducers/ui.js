import {
  ACTIVE_DRAWER_TOGGLER,
  INACTIVE_DRAWER_TOGGLER,
  SET_CONTAINER_WIDTH,
  SET_CARDS_UI
} from '../constants/ActionTypes';

const initalState = {
  drawer: {
    status: "open",
    AffectedUI: {
      aside: {width: "280px"},
      menu: {transform: "translateX(0)"}
    }
  },
  cards: {
    beginningWaterfallRender: false,
    containerWidth: document.body.clientWidth - 224
  }
}

const ui = (state = initalState, action) => {
  switch (action.type) {
    case ACTIVE_DRAWER_TOGGLER:
      return {
        ...state,
        drawer: action.drawer
      };
    case INACTIVE_DRAWER_TOGGLER:
      return {
        ...state,
        drawer: action.drawer
      };
    case SET_CONTAINER_WIDTH:
      return {
        ...state,
        cards: {
          ...state.cards,
          containerWidth: action.containerWidth
        }
      };
    case SET_CARDS_UI:
      return {
        ...state, 
        cards: {
          ...state.cards,
          style: action.cards
        }
      }
    default:
      return state;
  }
}

export const getDrawerAffectedUI = state => state.drawer.AffectedUI;
export const getContainerWidth = state => state.cards.containerWidth;
export const getCardsUI = state => state.cards.style;

export default ui;
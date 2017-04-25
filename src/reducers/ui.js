import {
  ACTIVE_DRAWER_TOGGLER,
  INACTIVE_DRAWER_TOGGLER
} from '../constants/ActionTypes';

const initalState = {
  drawer: {
    status: "close",
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

const card = (state = initalState, action) => {
  switch (action.type) {
    case ACTIVE_DRAWER_TOGGLER:
      const activeDrawerState = action.drawer;
      return {
        ...state,
        drawer: activeDrawerState
      };
    case INACTIVE_DRAWER_TOGGLER:
      const inactiveDrawerState = action.drawer;
      return {
        ...state,
        drawer: inactiveDrawerState
      };
    default:
      return state;
  }
}

export const getDrawerAffectedUI = state => 
  state.drawer

export default card;
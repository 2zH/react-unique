import Api from '../api';
import * as types from '../constants/ActionTypes';

const inActiveDrawerToggler = () => ({
  type: types.INACTIVE_DRAWER_TOGGLER,
  drawer: {
    status: "close",
    AffectedUI: {
      aside: {width: "54px"},
      menu: {transform: "translateX(-226px)"}
    }
  }
})

const activeDrawerToggler = () => ({
  type: types.ACTIVE_DRAWER_TOGGLER,
  drawer: {
    status: "open",
    AffectedUI: {
      aside: {width: "280px"},
      menu: {transform: "translateX(0)"}
    }
  }
})

export const setDrawerToggler = () => (dispatch, getState) => {
  if (getState().ui.drawer.status === "close") {
    dispatch(activeDrawerToggler())
  } else {
    dispatch(inActiveDrawerToggler())
  }
}

export const setContainerWidth = v => dispatch => {
  dispatch({
    type: types.SET_CONTAINER_WIDTH,
    containerWidth: v
  })
}

export const setChildsStyle = v => dispatch => {
  dispatch({
    type: types.SET_CARDS_UI,
    cards: v
  })
}

export const getAllCards = () => dispatch => {
  dispatch({
    type: types.GET_MOCK_DATA,
    cards: Api.getMockData(10)
  })
}
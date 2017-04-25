import Api from '../api';
import * as types from '../constants/ActionTypes';

const ActiveDrawerToggler = () => ({
  type: types.ACTIVE_DRAWER_TOGGLER,
  drawer: {
    status: "open",
    AffectedUI: {
      aside: {width: "54px"},
      menu: {transform: "translateX(-226px)"}
    }
  }
})

const InactiveDrawerToggler = () => ({
  type: types.INACTIVE_DRAWER_TOGGLER,
  drawer: {
    status: "close",
    AffectedUI: {
      aside: {width: "280px"},
      menu: {transform: "translateX(0)"}
    }
  }
})

export const setDrawerToggler = () => (dispatch, getState) => {
  if (getState().ui.drawer.status === "close") {
    dispatch(ActiveDrawerToggler())
  } else {
    dispatch(InactiveDrawerToggler())
  }
}

export const getAllCards = () => dispatch => {
  dispatch({
    type: types.GET_MOCK_DATA,
    cards: Api.getMockData(10)
  })
}
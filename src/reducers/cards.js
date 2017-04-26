import { GET_MOCK_DATA } from '../constants/ActionTypes';

const cards = (state = [], action) => {
  switch (action.type) {
    case GET_MOCK_DATA:
      return {
        ...state,
        ...action.cards
      };
    default: 
      return {
        ...state,
      };
  } 
}

// global state
export const getCards = state => Object.values(state);

export default cards;
import { INCREMENT, DECREMENT } from '../constants';

const initialState = {
  count: 0
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload
      };
    case DECREMENT:
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};

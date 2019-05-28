import { UPDATE_TEXT } from './constants';

const initialState = { text: 'Testing' };

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      console.log(action);
      return {
        ...state,
        text: action.payload
      };
    default:
      return state;
  }
};

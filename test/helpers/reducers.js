import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  THROW_ERROR,
  UNKNOWN,
} from './constants';

export const testReducer = (state = { text: 'Testing' }, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export const throwError = (state = {}, action) => {
  switch (action.payload) {
    case THROW_ERROR:
      throw new Error();
    default:
      return state;
  }
};

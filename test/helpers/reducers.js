import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  THROW_ERROR,
  UNKNOWN
} from './constants';

export const testReducer = (state = { text: 'Testing' }, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

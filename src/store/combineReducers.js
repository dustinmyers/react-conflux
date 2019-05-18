const combineReducers = ({ initialState, action, reducers }) => {
  const combinedReducers = {};

  reducers.map(reducer => {
    combinedReducers = {
      ...combinedReducers,
      ...reducer(initialState, action)
    };
  });

  return combinedReducers;
};

export default combineReducers;

/**
 * The makeInitialState function only runs once on application load from the Conflux library. This
 * function returns initial state from the default case in the reducer function.
 *
 * @param {Function} reducer A reducer function that contains a switch statement and, ultimately,
 * returns a state object.
 *
 * @returns {Object} Will return the intialState object from default case in the invoked reducer.
 */

const useInitialState = reducer => {
  /**
   * getRandomString is used to create a randomized alpha-numeric string to create the action type
   * for the initial reducer call. It is then prepended by "@conflux" which is a reserved phrase
   * for action types in Conflux.
   */

  const getRandomString = Math.random()
    .toString(36)
    .substring(7);

  /**
   * The reducer function is invoked and passed no first parameter and an object for the second
   * parameter.
   *
   * Parameter one is undefined as the reducer function should have a default parameter
   * of initialState inside the application.
   *
   * Parameter two is an object with a key-value pair for an initialState retrieval using the
   * getRandomString variable above appended to "@conflux" in a template literal string as
   * shown below.
   */

  return reducer(undefined, {
    type: `@conflux${getRandomString}`
  });
};

export default useInitialState;

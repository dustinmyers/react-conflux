/**
 * Used to search TestRenderer tree of components and find instance of text
 * that we've rendered successfully.
 */

export const findInChildren = predicate => {
  return testInstance => {
    const { children } = testInstance;
    return Array.isArray(children)
      ? children.some(predicate)
      : predicate(children);
  };
};

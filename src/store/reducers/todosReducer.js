import { ADD_TODO, TOGGLE_TODO } from '../constants';

export const todoState = {
  todos: [
    {
      value: 'Learn hooks',
      completed: false,
      id: 897429874
    }
  ],
  count: 8
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            value: action.payload,
            completed: false,
            id: new Date()
          }
        ]
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      });
    default:
      return state;
  }
};

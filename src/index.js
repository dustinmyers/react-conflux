import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  StateProvider,
  todoState,
  todoReducer,
  globalReducer,
  globalState
} from './store';
import TodoList from './components/todoList/TodoList';
import TodoInput from './components/todoList/TodoInput';

import './styles.css';

export const GlobalContext = createContext();
export const TodoContext = createContext();

function App() {
  const [showList, setShowList] = useState(true);

  return (
    <StateProvider
      reducer={globalReducer}
      initialState={globalState}
      StateContext={GlobalContext}
    >
      <div className="Wrapper">
        <h1 className="title">React 16 Todo List</h1>
        <StateProvider
          reducer={todoReducer}
          initialState={todoState}
          StateContext={TodoContext}
        >
          <TodoInput />
          {showList && <TodoList />}
          <button onClick={() => setShowList(!showList)}>
            {!showList ? 'Mount List' : 'Unmount List'}
          </button>
        </StateProvider>
      </div>
    </StateProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

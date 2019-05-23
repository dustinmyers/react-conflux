import React from 'react';
import { StateProvider } from 'react-conflux';
import { counterReducer } from './store/reducers/counterReducer';
import { titleReducer } from './store/reducers/titleReducer';
import { CounterContext, TitleContext } from './store/contexts';

import Counter from './components/Counter';

const App = () => {
  return (
    <StateProvider reducer={counterReducer} StateContext={CounterContext}>
      <StateProvider reducer={titleReducer} StateContext={TitleContext}>
        <Counter />
      </StateProvider>
    </StateProvider>
  );
};

export default App;

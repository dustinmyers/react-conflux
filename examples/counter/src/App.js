import React from 'react';
import { StateProvider } from 'react-conflux';
import { counterReducer } from './store/reducers/counterReducer';
import { titleReducer } from './store/reducers/titleReducer';
import { counterContext, titleContext } from './store/contexts';

import Counter from './components/Counter';

const App = () => {
  return (
<<<<<<< HEAD
    <StateProvider reducer={counterReducer} stateContext={counterContext}>
=======
    <StateProvider reducer={counterReducer} stateContext={CounterContext}>
>>>>>>> 47168b24b54fe2345407f93632ad141a85320156
      <StateProvider reducer={titleReducer} stateContext={titleContext}>
        <Counter />
      </StateProvider>
    </StateProvider>
  );
};

export default App;

// App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Form from './Form';

// Define your reducer function
const reducer = (state = {}, action: any) => {
  switch (action.type) {
    case 'SUBMIT_FORM':
      // Handle form submission here
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
};

export default App;

import ReduxProvider from './redux/ReduxProvider';
import Navigator from './router/Navigator';

import React from 'react';
import {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <ReduxProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;

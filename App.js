
import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/Navigation';


import store from '@Store';

const App = () => {
  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </StoreProvider>
    </SafeAreaProvider>
  );
};

export default App;

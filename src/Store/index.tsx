import { createStore } from 'easy-peasy';

import { homeModel as home } from './Home.Model';

let storeEnhancers: any[] = [];

if (__DEV__) {
  const reactotron = require('../../reactotron').default;
  reactotron.initiate();
  storeEnhancers = [...storeEnhancers, reactotron.createEnhancer()];
}


const store = createStore(
  {
    home,
  },
  {
    enhancers: [...storeEnhancers],
  },
);

export default store;

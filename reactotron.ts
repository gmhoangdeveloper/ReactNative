import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import {NativeModules} from 'react-native';

const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

const reactotronConfig = {
  initiate: () => {
    Reactotron.configure({host})
      .useReactNative()
      .use(reactotronRedux())
      .connect();
  },
  createEnhancer: () => Reactotron.createEnhancer(),
};

export default reactotronConfig;

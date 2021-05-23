import React from 'react';
import { View, Text } from 'react-native'

import {useTranslation} from 'react-i18next';


const Home = () => {
  const { t } = useTranslation('home');
  
     return (
    <View>
         <Text>{t('home')}</Text>
    </View>
  );
};

export default Home;

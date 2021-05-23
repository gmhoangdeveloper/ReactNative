import React from 'react'


import { createStackNavigator } from '@react-navigation/stack'

import { MainStack } from '@Constants/Navigation.Constant'
import {Home } from '@Screens';

const Stack = createStackNavigator();

const MainNavigation = () => {

  return (
    <>
      <Stack.Navigator headerMode="none">
          <Stack.Screen name={MainStack.Home} component={Home} />
      </Stack.Navigator>
    </>
      
  );
};

export default MainNavigation;

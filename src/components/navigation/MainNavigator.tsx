import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Items from '../screens/Items';
import MyItems from '../screens/MyItems';

const MainStackNavigator = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen name="Home" component={Home} />
      <MainStackNavigator.Screen name="Items" component={Items} />
      <MainStackNavigator.Screen name="MyItems" component={MyItems} />
    </MainStackNavigator.Navigator>
  );
};

export default MainNavigator;

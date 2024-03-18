import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/components/navigation/MainNavigator';
import {CartProvider} from './src/components/context/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;

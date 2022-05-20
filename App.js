import React from 'react';
//import {StatusBar} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes';
// import { Container } from './styles';

const FlashLigth = () => {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}

export default FlashLigth;
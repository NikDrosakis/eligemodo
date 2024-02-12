import React, { useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainScreen from './MainScreen';

export default function App = () => {
  useEffect(() => {
    // Hide the splash screen when the component mounts
    SplashScreen.hide();
  }, []);

  return <MainScreen />;
};
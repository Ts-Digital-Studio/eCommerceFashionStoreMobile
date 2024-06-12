import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes/intex';

import { 
  useFonts, 
  Poppins_600SemiBold, 
  Poppins_500Medium, 
} from '@expo-google-fonts/poppins';

import { 
  Inter_500Medium 
} from '@expo-google-fonts/inter'

import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return console.log('As fontes ainda estão carregando...');
  } else {
    // Ocultar a tela de splash quando as fontes estiverem carregadas
    SplashScreen.hideAsync(); 
    console.log('As fontes ja foram completamente carragadas !!!');
  }

  return (
    <>
      <Routes/>
      <StatusBar style='light'/>
    </>
  );
}

import React, { useEffect } from 'react';
import { Conteiner, Img } from './style';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { NavigationRoutesStack } from '../../routes/stack.routes';

export default function Splash() {
  const translateY = useSharedValue(200);

  const navigation = useNavigation<NavigationRoutesStack>()

  const navigateToHome = () => {
    navigation.navigate('homeTabs')
  }
  
  useEffect(() => {
    // Animação para mover a imagem de baixo para cima
    translateY.value = withTiming(0, {
      duration: 3000,
      easing: Easing.out(Easing.exp), 
    });

    // Navegar para a nova página após a animação
    const timeoutId = setTimeout(() => {
      navigateToHome();
    }, 3000); // O tempo deve ser o mesmo da duração da animação

    return () => clearTimeout(timeoutId); // Limpar o timeout se o componente for desmontado
  }, [translateY]);
  
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Conteiner>
       <Animated.View style={[animatedStyle]}>
        <Img source={require('../../assets/icon.png')}/>
       </Animated.View>
    </Conteiner>
  );
}
function runOnjs(NewPages: () => void) {
  throw new Error('Function not implemented.');
}


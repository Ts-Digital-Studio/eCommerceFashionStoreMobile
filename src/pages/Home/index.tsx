import React from 'react';
import { 
  Conteiner,
  Text,
  ConteinerTxtTitule,
  Image,
  IconNotification
} from './style';
import { TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <Conteiner>
      <ConteinerTxtTitule>
        <Text>F</Text> 
        <Image source={require('../../assets/bag.png')}/>
        <Text>sn</Text> 
        <TouchableOpacity activeOpacity={0.3}>
          <IconNotification name='notifications-outline' />
        </TouchableOpacity>
      </ConteinerTxtTitule>
    </Conteiner>
  );
}

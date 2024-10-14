import React from "react";
import { 
    ConteinerTxtTitule,
    IconNotification,
    Image,
    Text
} from "./styles";
import { TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <ConteinerTxtTitule>
        <Text>F</Text> 
        <Image source={require('../../assets/bag2.png')}/>
        <Text>sn</Text> 
        <TouchableOpacity activeOpacity={0.3}>
          <IconNotification name='notifications-outline' />
        </TouchableOpacity>
    </ConteinerTxtTitule>
  );
}
